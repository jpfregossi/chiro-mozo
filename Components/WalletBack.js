import { useWindowDimensions } from 'react-native';
import { Canvas, rrect, Box, Fill, rect, BoxShadow, Text, Group } from "@shopify/react-native-skia";

export default function WalletBack() {
    const { width, height } = useWindowDimensions();

    return (
        <Canvas style={{ width: width, height: height, zIndex: -1, position: 'absolute' }}>
            <Fill color={"#E6EAF3"} />
            <Group>
                <Box box={rrect(rect(width / 2 - 180, 50, 360, 100), 10, 10)} color="#FC6868">
                    <BoxShadow dx={10} dy={10} blur={52} color="gray" />
                    <BoxShadow dx={-10} dy={-10} blur={15} color="white" />
                </Box>
                <Box box={rrect(rect(width / 4 - 60, 105, 140, 30), 5, 5)} color="#FC6868">
                    <BoxShadow dx={-2} dy={2} blur={3} color="black" />
                    <BoxShadow dx={1} dy={-1} blur={3} color="#fecdcd" />
                </Box>
                <Box box={rrect(rect(3 * (width / 4) - 75, 105, 140, 30), 5, 5)} color="#FC6868">
                    <BoxShadow dx={-2} dy={2} blur={3} color="black" />
                    <BoxShadow dx={1} dy={-1} blur={3   } color="#fecdcd" />
                </Box>
            </Group>
        </Canvas>
    )
}