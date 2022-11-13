import { useWindowDimensions } from 'react-native';
import { Canvas, rrect, Box, Fill, rect, BoxShadow, Group } from "@shopify/react-native-skia";

export default function CardBack({ fWidth, fHeight, color }) { //
    const shade = 16;
    const { width, height } = useWindowDimensions();

    return (
        <Canvas style={{ width: width/fWidth, height: height/fHeight, zIndex: -1, position: 'absolute' }}>
            <Fill color={"rgba(0, 0, 0, 0)"} />
            <Group>
                <Box box={rrect(rect((width/fWidth) / 2 - 180, 22, 360, (height/fHeight)- 74), 10, 10)} color={color}>
                    <BoxShadow dx={4} dy={4} blur={5} color="gray" />
                    <BoxShadow dx={-5} dy={-5} blur={10} color="white" />
                </Box>
            </Group>
        </Canvas>
    )
}