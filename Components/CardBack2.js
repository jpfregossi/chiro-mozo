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

export default function CardBack2({ alto, color }) { //
    const { width, height, scale } = useWindowDimensions();
    const per = width / 100;
    const alt = 500;
    const hMargin = 5 * per;
    const ancho = width - 2 * hMargin;
    const r = 10;
    const altCont = scale*105 + 20;

    console.log("scale: ", height);

    const rct = useMemo(() => {
        const c = vec(width / 2, altCont / 2);
        return rrect(rect(c.x - (ancho / 2), c.y - (altCont / 2) + 10, ancho, altCont), r, r);
    }, [width]);

    const dx = 5;
    const dy = 5;

    return (
        <Canvas style={{ width: "100%", height: "85%" }}>
            <Box box={rct} color={color}>
                <BoxShadow dx={dx} dy={dy} blur={15} color="gray" />
            </Box>
        </Canvas>
    );
}