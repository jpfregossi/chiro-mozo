import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CardBack from '../CardBack';
import SelectorBack from './SelectorBack';
import DropdownIcon from '../../assets/dropdown.png';
import ChiroCoin from '../../assets/chiroldpi.png';

export default function ChirosRecibidas({ user }) {
    const [ selector, setSelector ] = useState("Hoy"); 

    return (
        <View style={styles.wrapper}>
            <View style={styles.row}>
                <View style={styles.selectorContainer}>
                    <View style={styles.titulo}>
                        <Text style={styles.text}>Chiroleadas Recibidas</Text>
                    </View>
                    <View style={styles.selector}>
                        <SelectorBack />
                        <Text style={styles.selectorText}>{selector}</Text>
                        <Image style={styles.dropdownIcon} source={DropdownIcon} />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.acumuladoWrapper}>
                    <CardBack fWidth={1} fHeight={7} color="#e0e0e0ff" />
                    <View style={styles.acumuladoContainer}>
                        <Text style={styles.acumuladoText}>Chiros acumuladas</Text>
                        <View style={styles.amount}>
                            <Image style={styles.chiroCoin} source={ChiroCoin} />
                            <Text style={styles.amountText}>100 chiro</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 110,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
    },
    selectorContainer: {
        marginHorizontal: 15,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    titulo: {
        flex: 2,
        paddingTop: 12,
        paddingLeft: 10,
    },
    selector: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectorText: {
        paddingLeft: 25,
        fontSize: 16,
        fontWeight: '700',
    },
    dropdownIcon: {
        width: 13,
        height: 8,
        marginTop: 4,
        resizeMode: 'stretch',
        marginRight: 30,
    },
    acumuladoWrapper: {
        flex: 1,
        paddingTop: 0,
        height: '120%',
        marginTop: -20,
    },
    acumuladoContainer: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40
    },
    acumuladoText: {
        fontWeight: '600',
        fontSize: 16,
        paddingBottom: 5,
        paddingLeft: 5,
    },
    amountText: {
        fontWeight: '800',
        fontSize: 16,
        paddingBottom: 5,
        paddingRight: 5,
    },
    chiroCoin: {
        marginRight: 15,
        marginTop: 3,
        width: 15,
        height: 15
    },
    amount: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    text: {
        fontFamily: 'Ubuntu',
        color: '#414141',
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        overflow: 'hidden',
    },
    card: {
        height: 2,
        backgroundColor: 'gray',
    }
});