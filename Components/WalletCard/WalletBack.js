import { useWindowDimensions } from 'react-native';
import { Canvas, rrect, Box, Fill, rect, BoxShadow, Group } from "@shopify/react-native-skia";

export default function WalletBack() {
    const { width, height } = useWindowDimensions();

    return (
        <Canvas style={{ width: width, height: 150, zIndex: -1, position: 'absolute' }}>
            <Group>
                <Box box={rrect(rect(width / 2 - 180, 25, 360, 100), 10, 10)} color="#FC6868">
                    <BoxShadow dx={4} dy={4} blur={5} color="gray" />
                    <BoxShadow dx={-5} dy={-5} blur={10} color="#f0f0f0" />
                </Box>
                <Box box={rrect(rect(width / 4 - 60, 80, 140, 30), 5, 5)} color="#FC6868">
                    <BoxShadow dx={-2} dy={2} blur={3} color="black" />
                    <BoxShadow dx={1} dy={-1} blur={3} color="#fecdcd" />
                </Box>
                <Box box={rrect(rect(3 * (width / 4) - 75, 80, 140, 30), 5, 5)} color="#FC6868">
                    <BoxShadow dx={-2} dy={2} blur={3} color="black" />
                    <BoxShadow dx={1} dy={-1} blur={3} color="#fecdcd" />
                </Box>
            </Group>
        </Canvas>
    )
}