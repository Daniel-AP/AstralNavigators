import { useThree } from "@react-three/fiber"
import { CubeTextureLoader } from "three"

import stars_texture_path from "../assets/stars_texture.jpg"

export const Stars = () => {

    const scene = useThree(t => t.scene)

    const loader = new CubeTextureLoader()
    const texture = loader.load([
        stars_texture_path,
        stars_texture_path,
        stars_texture_path,
        stars_texture_path,
        stars_texture_path,
        stars_texture_path,
    ])

    scene.background = texture

    return null

}