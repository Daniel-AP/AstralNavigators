import { Line } from "@react-three/drei"

export const Constellation = ({ points }) => {

    const vectorPoints = points.map((p) => [p.x, p.y, p.z])

    return (
        <>
            <Line
                points={vectorPoints} // Array of vectors
                color={"white"} // The color of the line
                lineWidth={2} // Thickness of the line
                onHover // Example click event
            />
            {
                points.map(p => (
                    <mesh position={[p.x, p.y, p.z]}>
                        <sphereGeometry args={[1, 30, 30]} />
                        <meshStandardMaterial color={"hotpink"} />
                    </mesh>
                ))
            }
        </>
    )

}