import React, { useState } from 'react';
import { Text, StyleSheet, View, Switch, Alert, Platform, PermissionsAndroid } from 'react-native';
import BLEAdvertiser from 'react-native-ble-advertiser';

import CardBack from '../CardBack';

// Uses the Apple code to pick up iPhones
const APPLE_ID = 0xC10;
const MANUF_DATA = [1, 0];

BLEAdvertiser.setCompanyId(APPLE_ID);

export async function requestLocationPermission() {
    try {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'BLE Avertiser Example App',
                    'message': 'Example App access to your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('[Permissions]', 'Location Permission granted')
            } else {
                console.log('[Permissions]', 'Location Permission denied')
            }
            const granted2 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
                {
                    'title': 'BLE Avertiser Example App',
                    'message': 'Example App access to bluetooth advertiser '
                }
            )
            if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('[Permissions]', 'Advertisement Permission granted')
            } else {
                console.log('[Permissions]', 'Advertisement Permission denied')
            }
            const granted3 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                {
                    'title': 'BLE Avertiser Example App',
                    'message': 'Example App access to bluetooth advertiser '
                }
            )
            if (granted3 === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('[Permissions]', 'Scan Permission granted')
            } else {
                console.log('[Permissions]', 'Scan Permission denied')
            }
            const granted4 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                {
                    'title': 'BLE Avertiser Example App',
                    'message': 'Example App access to bluetooth advertiser '
                }
            )
            if (granted4 === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('[Permissions]', 'Connect Permission granted')
            } else {
                console.log('[Permissions]', 'Connect Permission denied')
            }
        }

        const blueoothActive = await BLEAdvertiser.getAdapterState().then(result => {
            console.log('[Bluetooth]', 'Bluetooth Status', result)
            return result === "STATE_ON";
        }).catch(error => {
            console.log('[Bluetooth]', 'Bluetooth Not Enabled')
            return false;
        });

        if (!blueoothActive) {
            await Alert.alert(
                'Example requires bluetooth to be enabled',
                'Would you like to enable Bluetooth?',
                [
                    {
                        text: 'Yes',
                        onPress: () => BLEAdvertiser.enableAdapter(),
                    },
                    {
                        text: 'No',
                        onPress: () => console.log('Do Not Enable Bluetooth Pressed'),
                        style: 'cancel',
                    },
                ],
            )
        }
    } catch (err) {
        console.warn(err)
    }
}


const BeaconComponent = ({ user }) => {
    const [emitOn, setEmitOn] = useState(false);

    function startBeacon() {
        requestLocationPermission();
        start();
    }

    function stopBeacon() {
        stop();
    };

    function start() {
        console.log(user.uuid, "Starting Advertising");
        BLEAdvertiser.broadcast(user.uuid, MANUF_DATA, {
            advertiseMode: BLEAdvertiser.ADVERTISE_MODE_BALANCED,
            txPowerLevel: BLEAdvertiser.ADVERTISE_TX_POWER_MEDIUM,
            connectable: false,
            includeDeviceName: false, includeTxPowerLevel: false
        })
            .then(sucess => console.log(user.uuid, "Adv Successful", sucess))
            .catch(error => console.log(user.uuid, "Adv Error", error));
    }

    function stop() {
        console.log(user.uuid, "Stopping Broadcast");
        BLEAdvertiser.stopBroadcast()
            .then(sucess => console.log(user.uuid, "Stop Broadcast Successful", sucess))
            .catch(error => console.log(user.uuid, "Stop Broadcast Error", error));
    }

    function togglechiroSignal(e) {
        console.log('You clicked submit.');
        if (!emitOn) startBeacon();
        else stopBeacon();
        setEmitOn(!emitOn);
      } 

    return (
        <>
            <CardBack alto={50} color="#e9e9e9ff" />
            <View style={styles.beaconWrapper}>
                <View style={styles.beaconContainer}>
                    <View style={styles.beaconTextWrapper}>
                        <Text style={styles.beaconText}>{emitOn ? "Aparecer visible" : "Dejar de estar visible"}</Text>
                    </View>
                    <View style={styles.beaconSwitchWrapper}>
                        <Switch 
                            style={styles.beaconSwitch}
                            trackColor={{ false: "#8b8a8b", true: "#5A88FF" }}
                            thumbColor={"#EEF0F5"}
                            value={emitOn} onValueChange={(e) => togglechiroSignal(e)} />
                    </View>
                </View>
            </View>
        </>
    );
}

export default BeaconComponent;

const styles = StyleSheet.create({
    beaconWrapper: {
        width: '100%',
        height: 120,
        marginTop: -120,
    },
    beaconContainer: {
        width: '100%',
        height: 65,
        marginTop: 26,
        paddingHorizontal: 30,
        padding: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    beaconTextWrapper: {
        width: '70%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    beaconText: {
        fontSize: 18,
        fontFamily: 'Ubuntu',
        fontWeight: '700',
        paddingLeft: 5,
        color: 'black',
    },
    beaconSwitchWrapper: {
        width: '30%',
        height: '80%',
        paddingVertical: 8,
        paddingRight: 0,
        flex: 1,
        alignContent: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    beaconSwitch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }, { translateX: -20 }]
    },
});