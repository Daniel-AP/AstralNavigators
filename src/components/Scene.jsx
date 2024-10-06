import { OrbitControls, Stats } from "@react-three/drei"
import { Planet } from "./Planet"

import clouds_texture_path from "../assets/clouds_texture.jpg"

export const Scene = () => {

    return (
        <>
            <ambientLight />
            <Planet texturePath={clouds_texture_path} color={"white"} />
            <OrbitControls minDistance={5} maxDistance={20} />
            <Stats />
            <axesHelper args={[5]}/>
        </>
    )

}