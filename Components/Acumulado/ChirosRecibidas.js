import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CardBack3 from '../CardBack3';
import SelectorBack from './SelectorBack';
import DropdownIcon from '../../assets/dropdown.png';
import ChiroCoin from '../../assets/chiroldpi.png';

export default function ChirosRecibidas({ user }) {
    const [ selector, setSelector ] = useState("Mes"); 

    function getSum(total, feed) {
        console.log("total: " + total + " feed: " + feed);
        return parseFloat(total + feed);
    }

    /*const total = user.feedback.slice()
        .map((t) => {
            console.log("feed: ", t.amount);
            return t.amount;
        })
        .map((t) => {
            return t * user.lastRate;
        })
        .reduce(getSum, 0);*/

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
                    <CardBack3 alto={30} color="#eeeeeeff" />
                    <View style={styles.acumuladoContainer}>
                        <Text style={styles.acumuladoText}>Chiros acumuladas</Text>
                        <View style={styles.amount}>
                            <Image style={styles.chiroCoin} source={ChiroCoin} />
                            <Text style={styles.amountText}>{
                                user ? user.feedback.slice()
                                .map((t) => {
                                    return t.amount;
                                })
                                /*.filter((feed) => {
                                    return feed.crea > (Date.now() - 7200000);
                                })*/
                                .map((t) => {
                                    return t * user.lastRate;
                                })
                                .reduce(getSum, 0) : 0
                            } chiro</Text>
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
        height: 100,
    },
    row: {
        flexDirection: 'row',
        height: 50,
    },
    selectorContainer: {
        flexDirection: 'row',
        flex: 1,
        height: "100%",
    },
    titulo: {
        flex: 3.7,
        paddingTop: 12,
        paddingLeft: 25,
    },
    selector: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    selectorText: {
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: '700',
        paddingTop: 12,
    },
    dropdownIcon: {
        width: 13,
        height: 8,
        marginTop: 22,
        resizeMode: 'stretch',
        marginRight: 30,
    },
    acumuladoWrapper: {
        flex: 1,
        paddingTop: 0,
        marginTop: -10,
    },
    acumuladoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: -105,
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