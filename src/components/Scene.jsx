import { OrbitControls } from "@react-three/drei"
import { Planet } from "./Planet"
import { Constellation } from "./Constellation"

import kepler_texture from "../assets/kepler_texture.jpg"
import lyra_texture from "/assets/lyra.png"
import scutum_texture from "/assets/scutum.png"
import cygnus_texture from "/assets/cygnus.png"
import aquila_texture from "/assets/aquila.png"
import ophiuchus_texture from "/assets/ophiuchus.png"
import hercules_texture from "/assets/hercules.png"

export const Scene = () => {

    return (
        <>
            <ambientLight />
            <Planet name={"kepler-62e"} texturePath={kepler_texture} color={""} />
            <OrbitControls minDistance={5} />
            <Constellation name={"lyra"} position={[6, 6, 6]} texturePath={lyra_texture} />
            <Constellation name={"scutum"} position={[-6, -6, -6]} texturePath={scutum_texture} />
            <Constellation name={"cygnus"} position={[-4, 8, 10]} texturePath={cygnus_texture} />
            <Constellation name={"aquila"} position={[-10, 4, -10]} texturePath={aquila_texture} />
            <Constellation name={"ophiuchus"} position={[6.7, -8, 15]} texturePath={ophiuchus_texture} />
            <Constellation name={"hercules"} position={[15, -15, -15]} texturePath={hercules_texture} />
        </>
    )

}