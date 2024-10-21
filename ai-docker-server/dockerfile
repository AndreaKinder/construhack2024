FROM python:3.9-slim

WORKDIR /app

COPY . /app

RUN apt-get update && apt-get install -y python3-pip && pip3 install flask torch torchvision pillow

CMD ["python", "[ai-server-rpi4.py](http://server.py/)"]