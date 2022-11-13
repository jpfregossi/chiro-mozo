import { View, useWindowDimensions } from 'react-native';
import { Canvas, Fill, rrect, BoxShadow, rect, Box } from '@shopify/react-native-skia';

export default function BotonBack() {
    const { width, height } = useWindowDimensions();

    return (
        <View style={{ width: 400, height: 100, position: 'absolute' }}>
            <Canvas style={{ width: width, height: 100 }}>
                <Box box={rrect(rect(width /2 -160, 0,320,75), 20, 20)} color="#eef0f5">
                    <BoxShadow dx={-5} dy={-5} blur={20} color="#ffffff" />
                    <BoxShadow dx={13} dy={14} blur={12} color="#a6b4c870" />
                </Box>
            </Canvas>
        </View>
    )
}