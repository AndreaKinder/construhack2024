import { SafeAreaView, Text, View} from 'react-native';
import Logo from '../components/common/logo';
import styles from '../components/styles';
import LoginComponent from '../components/auth/LoginComponent';



export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <View>
                <LoginComponent />
            </View>
        </SafeAreaView>
    );
}
