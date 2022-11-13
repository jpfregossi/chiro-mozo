import { View, useWindowDimensions } from 'react-native';
import { Canvas, Fill, rrect, BoxShadow, rect, Box, Group } from '@shopify/react-native-skia';

export default function BotonBack({wid, hei}) {
    const { width, height } = useWindowDimensions();

    return (
        <View style={{ position: 'relative' }}>
            <Canvas style={{ width: width, height: height, zIndex: -1, position: 'absolute' }}>
            <Fill color={"#E6EAF3"} />
            <Group>
                <Box box={rrect(rect((width / 4) - 75, 0, 140, 30), 5, 5)} color="#FC6868">
                    <BoxShadow dx={-2} dy={2} blur={3} color="black" />
                    <BoxShadow dx={1} dy={-1} blur={3   } color="#fecdcd" />
                </Box>
            </Group>
        </Canvas>
        </View>
    )
}