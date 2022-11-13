import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import BotonBack from './BotonBack';

export default function BotonContainer({ text }) {
    const [alarmOn, setAlarmOn] = useState(false);

    return (
        <View style={{marginBottom: 70}}>
            <BotonBack wid="400" hei="100"/>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 15
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700',
                    fontFamily: 'Ubuntu',
                    color: 'black'
                }}>{text}</Text>
            </View>
        </View>
    );
}
