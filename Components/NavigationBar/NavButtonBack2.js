import { Canvas, rrect, Box, Fill, rect, BoxShadow } from "@shopify/react-native-skia";

export default function NavButtonBack2({ pressed }) {

    return (
        <Canvas style={{ width: 112, height: 112, zIndex: -1, position: 'absolute' }}>
            <Fill color={"rgba(0, 0, 0, 0)"} />
                {pressed ? (
                    <Box box={rrect(rect(28, 28, 56, 56), 14, 14)} color="#E7EAF0">
                        <BoxShadow dx={4} dy={4} blur={3} color="gray" inner />
                        <BoxShadow dx={-2} dy={-2} blur={3} color="white" inner />
                    </Box>) : (
                        <Box box={rrect(rect(28, 28, 56, 56), 14, 14)} color="#E7EAF0">
                            <BoxShadow dx={1} dy={1} blur={1} color="white" inner />
                            <BoxShadow dx={-1} dy={-1} blur={1} color="gray" inner />
                            <BoxShadow dx={4} dy={4} blur={12} color="gray" />
                            <BoxShadow dx={-4} dy={-4} blur={8} color="white" />
                        </Box>)
                }
        </Canvas>
    )
}