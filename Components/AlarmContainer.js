import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import AlarmBack from './AlarmBack';

export default function AlarmContainer({ feed }) {
    const [alarmOn, setAlarmOn] = useState(false);
    console.log("feed: ", feed);

    return (
        <View style={{marginBottom: 30}}>
            <AlarmBack />
            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 10
            }}>
                <View style={styles.dataContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: feed && feed.tipperPic,
                            }}
                    />
                </View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'gray'
                }}>{feed && feed.message}</Text>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    dataContainer: {
        flexDirection: 'row',
        marginLeft: 0 
    },
    tinyLogo: {
        width: 50,
        height: 50,
    }
});