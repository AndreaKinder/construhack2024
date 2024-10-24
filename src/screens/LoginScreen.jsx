import { SafeAreaView, View} from 'react-native';
import Logo from '../components/common/logo';
import styles from '../components/styles';
import LoginComponent from '../components/authExemple/LoginComponent';



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
