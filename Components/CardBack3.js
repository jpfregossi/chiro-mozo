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
import { useWindowDimensions } from "react-native";

export default function CardBack3({ alto, color }) { //
    const { width } = useWindowDimensions();
    const per = width / 100;
    const alt = 40;
    const hMargin = 5 * per;
    const ancho = width - 2 * hMargin;
    const r = 10;

    const rct = useMemo(() => {
        const c = vec(width / 2, alt / 2);
        return rrect(rect(c.x - (ancho / 2), c.y - (alto / 2) +10, ancho, alt), r, r);
    }, [width]);

    const dx = 5;
    const dy = 5;

    return (
        <Canvas style={{ width: "100%", height: 120 }}>
            <Box box={rct} color={color}>
                <BoxShadow dx={dx} dy={dy} blur={5} color="#a7a7a7" />
            </Box>
        </Canvas>
    );
}