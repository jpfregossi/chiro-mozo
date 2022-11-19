import { useWindowDimensions } from 'react-native';
import { Canvas, Fill } from "@shopify/react-native-skia";

export default function Background() {
    const { width, height } = useWindowDimensions();

    return (
        <Canvas style={{ width: width, height: height, zIndex: -1, position: 'absolute' }}>
            <Fill color={"#E6EAF3"} />
        </Canvas>
    )
}