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

export default function CardBack({ alto, color }) { //
    const { width } = useWindowDimensions();
    const per = width / 100;
    const alt = parseInt(alto);
    const hMargin = 5 * per;
    const ancho = width - 2 * hMargin;
    const r = 10;

    const rct = useMemo(() => {
        const c = vec(width / 2, alt / 2);
        return rrect(rect(c.x - (ancho / 2), c.y - (alto / 2) + 50, ancho, alt), r, r);
    }, [width]);

    const dx = 4;
    const dy = 4;

    return (
        <Canvas style={{ width: "100%", height: 120 }}>
            <Box box={rct} color={color}>
                <BoxShadow dx={dx} dy={dy} blur={10} color="gray" />
            </Box>
        </Canvas>
    );
}