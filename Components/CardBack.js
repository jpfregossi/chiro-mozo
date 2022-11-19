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
                    <BoxShadow dx={-5} dy={-5} blur={10} color="#f0f0f0" />
                    <BoxShadow dx={-3} dy={-3} blur={3} color="gray" inner/>
                    <BoxShadow dx={3} dy={3} blur={3} color="white" inner/>
                </Box>
            </Group>
        </Canvas>
    )
}