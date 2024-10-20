from flask import Flask, request, jsonify
import torch
from torchvision import transforms
from PIL import Image
from flask_sqlalchemy import SQLAlchemy
import redis
import io

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
cache = redis.Redis(host='localhost', port=6379)

class Classification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_data = db.Column(db.LargeBinary, nullable=False)
    shape = db.Column(db.String(20), nullable=False)

class SimpleModel(torch.nn.Module):
    def __init__(self):
        super(SimpleModel, self).__init__()
        self.conv1 = torch.nn.Conv2d(3, 6, 5)
        self.pool = torch.nn.MaxPool2d(2, 2)
        self.fc1 = torch.nn.Linear(6 * 53 * 53, 2)  # Ajusta los parámetros según tus necesidades

    def forward(self, x):
        x = self.pool(torch.nn.functional.relu(self.conv1(x)))
        x = x.view(-1, 6 * 53 * 53)
        x = self.fc1(x)
        return x

model = SimpleModel()
model.load_state_dict(torch.load("model.pth"))
model.eval()

def transform_image(image_bytes):
    transform = transforms.Compose([
        transforms.Resize((128, 128)),
        transforms.ToTensor(),
    ])
    image = Image.open(io.BytesIO(image_bytes))
    return transform(image).unsqueeze(0)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file part", 400
    file = request.files['file'].read()

    # Check cache first
    cached_shape = cache.get(file)
    if cached_shape:
        return jsonify({"shape": cached_shape.decode('utf-8')})

    tensor = transform_image(file)
    output = model(tensor)

    # Interpretar la salida del modelo
    shape = "round" if output.argmax().item() == 0 else "square"

    # Guardar la clasificación en la base de datos y caché
    new_classification = Classification(image_data=file, shape=shape)
    db.session.add(new_classification)
    db.session.commit()
    cache.set(file, shape)

    return jsonify({"shape": shape})

@app.route('/classifications', methods=['GET'])
def get_classifications():
    classifications = Classification.query.all()
    results = [{"id": c.id, "shape": c.shape} for c in classifications]
    return jsonify(results)

if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', port=5000)