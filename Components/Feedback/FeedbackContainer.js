import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';
import { formatCurrency } from "react-native-format-currency";

export default function FeedbackContainer({ feed, rate }) {
    moment.locale('es'); 
    var localLocale = moment(new Date(feed.createdAt));
    console.log("rate: ", rate);
    var fecha = localLocale.format('dddd') + " " + localLocale.format('D/M');
    var hora = localLocale.format('h:mm');
    fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);

    return (<>
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: feed && feed.tipperPic,
                        }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textTopContainer}>
                        <View style={styles.fecha}>
                            <Text style={styles.text}>{fecha}</Text>
                        </View>
                        <View style={styles.hora}>
                            <Text style={styles.text}>{hora}</Text>
                        </View>
                    </View>
                    <View style={styles.textTopContainer}>
                        <View style={styles.fecha}>
                            <Text style={styles.text}>{feed && feed.message}</Text>
                        </View>
                        <View style={styles.hora}>
                            <Text style={styles.text}>{formatCurrency({ amount: ((Math.round(feed.amount * rate * 100)/100) + 0.001), code: "ARS" })[1].slice(0, -1)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.spacer}>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 2.5,
        paddingHorizontal: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        marginLeft: 0,
    },
    tinyLogo: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 15,
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 15,
    },
    textTopContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textBottomContainer: {
        flex: 1,
    },
    hora: {
        textAlign: 'left',
    },
    fecha: {
        textAlign: 'right',
    },
    text: {
        fontFamily: 'Ubuntu',
        color: '#414141',
        fontSize: 15,
        //fontWeight: '700',
        color: '#414141',
        overflow: 'hidden',
    },
    textMessage: {
        fontFamily: 'Ubuntu',
        color: '#414141',
        fontSize: 15,
        fontWeight: '700',
        overflow: 'hidden',
        marginTop: 2,   
    },
    spacer: {
        height: 1.5,
        backgroundColor: '#9191917a',
        width: '90%',
        margin: 10,
    }
});