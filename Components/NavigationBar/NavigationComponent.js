import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import FeedbackLogo from '../../assets/comentarios.png';
import HomeLogo from '../../assets/home.png';
import ProfileLogo from '../../assets/perfil.png';
import NavButtonBack from './NavButtonBack';
import NavButtonBack2 from './NavButtonBack2';

const NavigationComponent = ({ navigation }) => {

    return (
        <View style={styles.navigationContainer}>
            <TouchableOpacity
                onPress={() => console.log("Clickeó botón Comments!")}
                accessibilityLabel="feedback"
            >
                <View style={styles.buttonContainer}>
                    <NavButtonBack />
                    <Image
                        style={styles.buttonLogo}
                        source={FeedbackLogo} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log("Clickeó botón Home!")}
                accessibilityLabel="home"
            >
                <View style={styles.buttonContainer}>
                    <NavButtonBack pressed={true} />
                    <Image
                        style={styles.buttonLogo2}
                        source={HomeLogo} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('TestComponent2')
                }
                accessibilityLabel="profile"
            >
                <View style={styles.buttonContainer}>
                    <NavButtonBack2 pressed={false} />
                    <Image
                        style={styles.buttonLogo}
                        source={ProfileLogo} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default NavigationComponent;

const styles = StyleSheet.create({
    navigationContainer: {
        position: 'absolute',
        bottom: 0,
        height: 112,
        width: '95%',
        marginHorizontal: '2.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 0,
    },
    buttonContainer: {
        width: 112,
        height: 112,
        borderRadius: 15,
    },
    buttonContainer2: {
        width: 115,
        height: 115,
        borderRadius: 12,
    },
    buttonLogo: {
        height: 26,
        width: 26,
        margin: 43,
    },
    buttonLogo2: {
        height: 30,
        width: 30,
        margin: 41,
    }
});