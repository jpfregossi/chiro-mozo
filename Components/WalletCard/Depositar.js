import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-community/clipboard';

import { selectAllUsers } from '../../store/users';
import CopyIcon from '../../assets/copyIcon.png';


export default function Depositar() {
    const user = useSelector((state) => state.users.currentUser);

    const writeToClipboard = async () => {
        Clipboard.setString(user ? user.widthdrawallWallets[0].address : 'NA');
        alert('Se copio en el portapapeles');
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>Dirección de billetera <Text style={styles.tituloTextoColor}>ETH</Text></Text>
            </View>
            <View style={styles.descripcion}>
                <Text style={{ ...styles.text, fontWeight: '700' }}>Escaneá el código QR</Text>
                <Text style={styles.text}>Depositá siempre desde</Text>
                <Text style={styles.text}>billeteras de la red Ethereum</Text>
            </View>
            <View style={styles.qrWrapper}>
                <View style={styles.qr}>
                    <QRCode
                        //QR code value
                        value={user ? user.widthdrawallWallets[0].address : 'NA'}
                        //size of QR Code
                        size={200}
                        //Color of the QR Code (Optional)
                        color="black"
                        //Background Color of the QR Code (Optional)
                        backgroundColor="white"
                    />
                </View>
            </View>
            <View style={styles.direccionWrapper}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.walletAddress}
                    onPress={writeToClipboard}>
                    <Text style={styles.addressText}>
                        {user ? user.widthdrawallWallets[0].address + " " : 'NA'}
                        <Image
                            style={{
                                marginRight: 40,
                                marginTop: 3,
                                width: 15,
                                height: 15
                            }}
                            source={CopyIcon} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#EAEDF2',
        flexDirection: 'column',
    },
    titulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloTexto: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
    },
    tituloTextoColor: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FC6868',
    },
    descripcion: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
    },
    qrWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qr: {
        width: 230,
        height: 230,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    direccionWrapper: {
        flex: 2,
        paddingTop: 20,
        paddingLeft: 30,
        flexDirection: 'row',
    },
    walletAddress: {
        width: '90%',
    },
    addressText: {
        paddingTop: 10,
        fontSize: 10,
        textAlign: 'center'
    },
});
