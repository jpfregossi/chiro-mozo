import React, { useMemo } from "react";
import { useWindowDimensions } from 'react-native';
import { Canvas, rrect, Box, Fill, rect, BoxShadow, Group, vec } from "@shopify/react-native-skia";

export default function SelectorBack() { //
    const color = '#e0e0e0ff';

    const { width } = useWindowDimensions();
    const per = width / 100;
    const alt = 5;
    const hMargin = 5 * per;
    const ancho = (width / 5.7) * 1.57;
    const r = 10;

    const rct = useMemo(() => {
        const c = vec(width / 2, alt / 2);
        return rrect(rect(c.x - (ancho / 2), c.y - (alt / 2) + 50, ancho, alt), r, r);
    }, [width]);

    const dx = 4;
    const dy = 4;

    console.log("width: ", width);

    return (
        <Canvas style={{ width: '100%', height: 50, zIndex: -1, position: 'absolute' }}>
            <Group>
                <Box box={rrect(rect(4, 10, ancho - 4, 30), 5, 5)} color={color}>
                    <BoxShadow dx={2} dy={2} blur={4} color="gray" />
                    <BoxShadow dx={-2} dy={-2} blur={4} color="white" />
                </Box>
            </Group>
        </Canvas>
    )
}