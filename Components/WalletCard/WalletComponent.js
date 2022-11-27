import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WalletBack from './WalletBack';
import { formatCurrency } from "react-native-format-currency";
import ChiroCoin from '../../assets/chiroldpi.png'
import DepositarIcon from '../../assets/depositar.png'
import RetirarIcon from '../../assets/retirar.png'


export default function WalletComponent({ navigation, user }) {

    return (
        <View style={styles.wallet}>
            <WalletBack />
            <View style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'space-between',
                marginTop: 28,
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
                        Buenas,
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
                    <Image
                        style={{
                            marginRight: 5,
                            marginTop: 3,
                            width: 15,
                            height: 15
                        }}
                        source={ChiroCoin} />
                    <Text style={{
                        marginRight: 5,
                        fontSize: 16,
                        fontWeight: '500',
                        color: 'white'
                    }}>
                        {user && formatCurrency({ amount: ((user.lastBalance * 467600) + 0.001), code: "ARS" })[1].slice(0, -1)}
                    </Text>
                    <Text style={{
                        marginRight: 35,
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#414141'
                    }}>
                         Chiro
                    </Text>
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
                    style={{
                        marginLeft: 15, 
                        display: 'flex', 
                        width: '50%', 
                        flexDirection: 'row', 
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        style={{
                            marginRight: 0,
                            marginTop: -3,
                            width: 15,
                            height: 20
                        }}
                        source={DepositarIcon} />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        fontFamily: 'Ubuntu',
                        marginTop: -6,
                        marginLeft: 1,
                        lineHeight: 29,
                        color: 'black',
                        width: '50%',
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
                    style={{
                        marginRight: 10, 
                        display: 'flex', 
                        width: '50%', 
                        flexDirection: 'row', 
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        style={{
                            marginRight: 0,
                            marginTop: 3,
                            width: 15,
                            height: 15
                        }}
                        source={RetirarIcon} />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        fontFamily: 'Ubuntu',
                        marginTop: -6,
                        marginLeft: 0,
                        lineHeight: 29,
                        color: 'black',
                        width: 80,
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
        height: 130,
        marginTop: -15,
    },
});
