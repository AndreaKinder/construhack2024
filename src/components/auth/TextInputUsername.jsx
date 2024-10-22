import { TextInput, View } from 'react-native';
import styles from '../styles';

export default function TextInputUsername({username, setUsername}) {

    return (
        <View>
            <TextInput style={styles.input}
                placeholder='USUARIO'
                value={username}
                onChangeText={setUsername}
                autoCorrect={false}
                autoCapitalize='none'
            />
        </View>
    );
}

