import { useWindowDimensions } from 'react-native';
import React, { useMemo } from "react";
import { Canvas, rrect, Box, vec, rect, BoxShadow, Group } from "@shopify/react-native-skia";

export default function WalletBack() {
    const { width } = useWindowDimensions();
    const per = width / 100;
    const alt = 100;
    const hMargin = 5 * per;
    const ancho = width - 2 * hMargin;
    const r = 10;

    const rct = useMemo(() => {
        const c = vec(width / 2, alt / 2);
        return rrect(rect(c.x - (ancho / 2), c.y - (alt / 2) + 20, ancho, alt), r, r);
    }, [width]);

    const rct2 = useMemo(() => {
        const c = vec(width / 2, alt / 2);
        return rrect(rect(c.x + 20  , c.y + 22, ancho/2.5, alt/3), 5, 5);
    }, [width]);

    const rct3 = useMemo(() => {
        const c = vec(width / 2, alt / 2);
        return rrect(rect(ancho - c.x - (ancho / 3), c.y + 22, ancho/2.5, alt/3), 5, 5);
    }, [width]);

    const dx = 4;
    const dy = 4;

    return (
        <Canvas style={{ width: "100%", height: 200, zIndex: -1, position: "absolute"}}>
            <Group>
                <Box box={rct} color="#FC6868">
                    <BoxShadow dx={dx} dy={dy} blur={10} color="gray" />
                    <BoxShadow dx={-5} dy={-5} blur={10} color="#f0f0f0" />
                </Box>
                <Box box={rct2} color="#FC6868">
                    <BoxShadow dx={-2} dy={2} blur={3} color="black" />
                    <BoxShadow dx={1} dy={-1} blur={3} color="#fecdcd" />
                </Box>
                <Box box={rct3} color="#FC6868">
                    <BoxShadow dx={-2} dy={2} blur={3} color="black" />
                    <BoxShadow dx={1} dy={-1} blur={3} color="#fecdcd" />
                </Box>
            </Group>
        </Canvas>
    )
}