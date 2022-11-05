import { View, Image, Text } from 'react-native';
import WalletBack from './WalletBack';

export default function Wallet() {
    return (
        <View>
            <WalletBack />
            <View style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'space-between',
                marginTop: 60
            }}>
                <View style={{
                    flexDirection: 'row',
                    width: '50%',
                    alignItems: 'center',
                    marginTop: 0
                }}>
                    <Text style={{
                        marginLeft: 40,
                        fontSize: 16,
                        fontWeight: '500',
                        color: 'black'
                    }}>
                        Bienvenido, 
                    </Text>
                    <Text style={{
                        marginLeft: 5,
                        fontSize: 16,
                        fontWeight: '500',
                        color: 'white'
                    }}>
                        Fernando
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '50%',
                    justifyContent: 'flex-end',
                    marginTop: 0
                }}>
                    <Text style={{
                        marginRight: 5,
                        fontSize: 16,
                        fontWeight: '500',
                        color: 'white'
                    }}>
                        2000,00 
                    </Text>
                    <Text style={{
                        marginRight: 40,    
                        fontSize: 16,
                        fontWeight: '500',
                        color: 'black'
                    }}>
                        X
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 29
            }}>
                <Text>
                    DEPOSITAR
                </Text>
                <Text>
                    RETIRAR
                </Text>
            </View>
        </View> 
    )
}