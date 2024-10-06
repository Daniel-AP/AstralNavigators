import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Scene } from './components/Scene'
import { Stars } from './components/Stars'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Card } from './components/Card'

gsap.registerPlugin(ScrollToPlugin)

export const App = () => {

  const handleDown = () => {

      gsap.to(document.getElementById("root"), { duration: 1.5, scrollTo: window.innerHeight, ease: "power2.inOut" });

  }

  const handleUp = () => {

    gsap.to(document.getElementById("root"), { duration: 1.5, scrollTo: 0, ease: "power2.inOut" });

  }

  return (
    <>
      <Canvas onClick={handleDown} camera={{
        far: 1000
      }} >
        <Scene />
        <Stars />
      </Canvas>
      <div className='flex-col justify-center lg:justify-start p-12 lg:ps-32 relative' id="info">
            <button onClick={handleUp} className='rounded-full absolute flex justify-center items-center left-1/2 top-3 duration-500 transition-all bg-black h-12 w-12  shadow-sm shadow-white hover:shadow-md hover:shadow-white transform translate-x-1/2'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 5l0 14" />
                  <path d="M18 11l-6 -6" />
                  <path d="M6 11l6 -6" />
                </svg>
            </button>
            <Card />
      </div>
    </>
  )
}