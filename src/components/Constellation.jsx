import { useLoader } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";

export const Constellation = ({ name, texturePath, position }) => {

    const texture = useLoader(TextureLoader, texturePath);

    const handleClick = (e) => {
        console.log("click");
        const element = document.getElementById("hoverTag");
        document.getElementById("const-name").textContent = name;

        let top = e.clientY + 20;
        let left = e.clientX + 20;

        const elementRect = element.getBoundingClientRect();
        const hoverWidth = elementRect.width;
        const hoverHeight = elementRect.height;
        console.log(hoverWidth, hoverHeight)

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const margin = 20;

        if (left + hoverWidth > screenWidth) {
            left = screenWidth - hoverWidth - margin;
        }

        if (top + hoverHeight > screenHeight) {
            top = screenHeight - hoverHeight - margin;
        }

        element.style.top = `${top}px`;
        element.style.left = `${left}px`;
        element.style.visibility = "visible";
        element.style.pointerEvents = "auto";
        element.setAttribute("data-name", name);
        element.focus()
    };

    return (
        <mesh onClick={handleClick} position={position}>
            <planeGeometry attach="geometry" args={[3, 3]} />
            <meshBasicMaterial attach="material" map={texture} transparent side={DoubleSide} />
        </mesh>
    );
};
