import { OrbitControls } from "@react-three/drei"
import { Planet } from "./Planet"
import { Constellation } from "./Constellation"

import constellations from "../assets/constellations.json"
import clouds_texture_path from "../assets/clouds_texture.jpg"

export const Scene = () => {

    return (
        <>
            <ambientLight />
            <Planet texturePath={clouds_texture_path} color={"white"} />
            <OrbitControls minDistance={5} />
            {
                constellations.map(c => <Constellation points={c} />)
            }
        </>
    )

}