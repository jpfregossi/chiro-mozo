import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import FeedbackLogo from '../../assets/comentarios.png';
import HomeLogo from '../../assets/home.png';
import HomeLogoActive from '../../assets/home_active.png';
import ProfileLogo from '../../assets/perfil.png';
import NavButtonBack from './NavButtonBack';
import NavButtonBack2 from './NavButtonBack2';

const NavigationComponent = ({ navigation }) => {

    return (
        <View style={styles.navigationContainer}>
            <TouchableOpacity
                onPress={() => console.log("Clickeó botón Comments!")}
                accessibilityLabel="feedback"
                style={styles.touchableArea}
            >
                <Image
                    style={styles.buttonLogo}
                    source={FeedbackLogo} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log("Clickeó botón Home!")}
                accessibilityLabel="home"
                style={styles.touchableArea}
            >
                <Image
                    style={styles.buttonLogo2}
                    source={HomeLogoActive} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('TestComponent2')
                }
                accessibilityLabel="profile"
                style={styles.touchableArea}
            >
                <Image
                    style={styles.buttonLogo}
                    source={ProfileLogo} />
            </TouchableOpacity>
        </View>
    );
}

export default NavigationComponent;

const styles = StyleSheet.create({
    navigationContainer: {
        position: 'absolute',
        bottom: 0,
        height: 140,
        width: '95%',
        marginHorizontal: '2.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    touchableArea: {
        zIndex: 1,
        borderRadius: 10,
    },
    buttonLogo: {
        height: 140,
        width: 140,
        margin: 0,
    },
    buttonLogo2: {
        height: 140,
        width: 140,
        margin: 0,
    }
});