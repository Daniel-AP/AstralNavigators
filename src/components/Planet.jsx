import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

export const Planet = ({ texturePath, color }) => {

    const texture = useLoader(TextureLoader, texturePath)

    return (
        <mesh>
            <sphereGeometry args={[2, 50, 50]} />
            <meshStandardMaterial map={texture} color={color} />
        </mesh>
    )

}