import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import WalletBack from './WalletBack';

export default function WalletContainer({ alarm }) {
    const [alarmOn, setAlarmOn] = useState(false);

    return (
        <View style={{marginBottom: 70}}>
            <WalletBack />
            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 15
            }}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: '500',
                    color: 'gray'
                }}>{alarm}</Text>
                <Switch value={alarmOn} onValueChange={() => setAlarmOn(!alarmOn)} />
            </View>
        </View>
    );
}
