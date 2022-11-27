import React, { useMemo } from "react";
import {
    FitBox,
    Path,
    Paint,
    Box,
    Canvas,
    Fill,
    vec,
    rrect,
    rect,
    Shadow,
    BoxShadow,
    Group,
} from "@shopify/react-native-skia";
import { Text, StyleSheet, View, Switch, Alert, Platform, PermissionsAndroid } from 'react-native';
import { useWindowDimensions } from "react-native";

export default function TestComponent() {
    const { width } = useWindowDimensions();
    const per = width / 100;
    const alto = 50;
    const hMargin = 5 * per;
    const ancho = width - 2 * hMargin;
    const r = 10;

    const rct = useMemo(() => {
        const c = vec(width / 2, alto / 2);
        return rrect(rect(c.x - (ancho / 2), c.y - (alto / 2) + 50, ancho, alto), r, r);
    }, [width]);

    const dx = 4;
    const dy = 4;

    return (
        <Canvas style={{ width: "100%", height: 120 }} mode="continuous">
            <Fill color={"rgba(151, 63, 63, 0)"} />
            <Box box={rct} color="#E8E8E8CF">
                <BoxShadow dx={dx} dy={dy} blur={10} color="gray" />
            </Box>
        </Canvas>
    );
};

/*
<View style={styles.beaconWrapper}>
                <View style={styles.beaconContainer}>
                    <View style={styles.beaconTextWrapper}>
                        <Text style={styles.beaconText}>Aparecer visible</Text>
                    </View>
                    <View style={styles.beaconSwitchWrapper}>
                        <Switch style={styles.beaconSwitch}
                             onValueChange={() => console.log("Activado")} />
                    </View>
                </View>
            </View>
*/

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