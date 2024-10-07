import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

export const Planet = ({ name, texturePath, color }) => {

    const texture = useLoader(TextureLoader, texturePath)

    const handleClick = (e) => {
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

        console.log(top, left)
        element.style.top = `${top}px`;
        element.style.left = `${left}px`;
        element.style.visibility = "visible";
        element.style.pointerEvents = "auto";
        element.setAttribute("data-name", name);
        element.focus()
    }

    return (
        <mesh onClick={handleClick}>
            <sphereGeometry args={[2, 50, 50]} />
            <meshStandardMaterial map={texture} color={color} />
        </mesh>
    )

}