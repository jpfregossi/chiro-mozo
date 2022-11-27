import { Canvas, rrect, Box, Fill, rect, BoxShadow, Paint, Group } from "@shopify/react-native-skia";

export default function NavButtonBack2({ pressed }) {

    return (
        <Canvas style={{ width: 112, height: 111, zIndex: -1, position: 'absolute' }}>
            {pressed ? (
                <Group>
                    <Box box={rrect(rect(28, 28, 56, 56), 14, 14)} color="#E7EAF0">
                    <BoxShadow dx={4} dy={4} blur={3} color="gray" inner />
                    <BoxShadow dx={-2} dy={-2} blur={3} color="white" inner />
                </Box>
                </Group>
                ) : (
                <Group>
                    <Box box={rrect(rect(10, 45, 90, 80), 0, 0)} color="#E6EAF3">
                    </Box>
                    <Box box={rrect(rect(28, 28, 56, 56), 14, 14)} color="#E7EAF0">
                        <BoxShadow dx={-2} dy={-2} blur={5} color="white" />
                        <BoxShadow dx={4} dy={4} blur={12} color="#5a5a5a" />
                    </Box>
                </Group>
            )
            }
        </Canvas>
    )
}