import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WalletBack from './WalletBack';
import { formatCurrency } from "react-native-format-currency";
import ChiroCoin from '../../assets/chiroldpi.png'


export default function WalletComponent({ navigation, user }) {

    return (
        <View style={styles.wallet}>
            <WalletBack />
            <View style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'space-between',
                marginTop: 60
            }}>
                <View style={{
                    flexDirection: 'row',
                    width: '70%',
                    alignItems: 'center',
                    marginTop: 0
                }}>
                    <Text style={{
                        marginLeft: 40,
                        fontSize: 16,
                        fontWeight: '700',
                        fontFamily: 'Ubuntu',
                        color: 'black'
                    }}>
                        Bienvenido/a,
                    </Text>
                    <Text style={{
                        marginLeft: 5,
                        fontSize: 16,
                        fontWeight: '700',
                        fontFamily: 'Ubuntu',
                        color: 'white'
                    }}>
                        {user && user.username}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '30%',
                    justifyContent: 'flex-end',
                    marginTop: 0
                }}>
                    <Text style={{
                        marginRight: 5,
                        fontSize: 16,
                        fontWeight: '500',
                        color: 'white'
                    }}>
                        {user && formatCurrency({ amount: ((user.lastBalance * 467600) + 0.001), code: "ARS" })[1].slice(0, -1)}
                    </Text>
                    <Image
                        style={{
                            marginRight: 40,
                            marginTop: 3,
                            width: 15,
                            height: 15
                        }}
                        source={ChiroCoin} />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 29,
            }}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Depositar')
                    }
                    accessibilityLabel="depositar"
                >
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        fontFamily: 'Ubuntu',
                        marginTop: -6,
                        marginLeft: 6,
                        lineHeight: 29,
                        color: 'white',
                        width: 140,
                        borderRadius: 5,
                        height: 30,
                        textAlign: 'center',
                    }}>
                        DEPOSITAR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log("Clickeó botón 2!")}
                    accessibilityLabel="depositar"
                >
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        fontFamily: 'Ubuntu',
                        marginTop: -6,
                        marginLeft: -20,
                        lineHeight: 29,
                        color: 'white',
                        width: 140,
                        borderRadius: 5,
                        height: 30,
                        textAlign: 'center',
                    }}>
                        RETIRAR
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    wallet: {
        height: 170,
    },
});
