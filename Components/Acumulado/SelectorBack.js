import { useWindowDimensions } from 'react-native';
import { Canvas, rrect, Box, Fill, rect, BoxShadow, Group } from "@shopify/react-native-skia";

export default function SelectorBack() { //
    const color = '#e0e0e0ff';

    return (
        <Canvas style={{ width: 120, height: 50, zIndex: -1, position: 'absolute' }}>
            <Group>
                <Box box={rrect(rect(15, 10, 90, 30), 5, 5)} color={color}>
                    <BoxShadow dx={2} dy={2} blur={4} color="gray" />
                    <BoxShadow dx={-2} dy={-2} blur={4} color="white" />
                </Box>
            </Group>
        </Canvas>
    )
}