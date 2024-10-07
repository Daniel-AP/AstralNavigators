import React, { useEffect, useState, useCallback, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Stars } from './components/Stars';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Card } from './components/Card';
import constellations_info from './assets/data.json';
import icon from '/assets/icon.png'

gsap.registerPlugin(ScrollToPlugin);

const MemoizedCanvas = memo(() => (
  <Canvas camera={{ far: 1000 }}>
    <Scene />
    <Stars />
  </Canvas>
));

export const App = () => {
  const [constInfo, setConstInfo] = useState("");
  const [constName, setConstName] = useState("");
  const [constImgPath, setConstImgPath] = useState("");

  const handleUp = () => {
    gsap.to(document.getElementById('root'), { duration: 1.5, scrollTo: 0, ease: 'power2.inOut' });
  }

  const handleBlur = () => {
    const element = document.getElementById('hoverTag');
    element.style.visibility = 'hidden';
    element.style.pointerEvents = 'none';
  }

  const handleClick = (e) => {
    e.preventDefault();
    const objectName = e.target.parentElement.dataset.name;
    setConstName(objectName);
    setConstInfo(constellations_info[objectName]);
    setConstImgPath(`/assets/${objectName}.png`);
    e.target.parentElement.style.visibility = 'hidden';
    e.target.parentElement.style.pointerEvents = 'none';
    gsap.to(document.getElementById('root'), { duration: 1.5, scrollTo: window.innerHeight, ease: 'power2.inOut' });
  }

  return (
    <>
      <MemoizedCanvas />
      <div className='flex-col pt-20 lg:pt-12 justify-center lg:justify-start p-12 lg:ps-32 overflow-auto relative pb-36 lg:pb-12' id='info'>
        <button
          onClick={handleUp}
          className='rounded-full absolute flex justify-center items-center left-1/2 top-3 duration-500 transition-all bg-black h-12 w-12 shadow-sm shadow-white hover:shadow-md hover:shadow-white transform -translate-x-1/2'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 24 24' strokeWidth='1.5' stroke='white' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 5l0 14' />
            <path d='M18 11l-6 -6' />
            <path d='M6 11l6 -6' />
          </svg>
        </button>
        <div className='flex pt-80 md:pt-[30rem] lg:pt-0'>
          <Card title={constName} content={constInfo} imgPath={constImgPath} />
        </div>
      </div>
      <div data-name='' id='hoverTag' tabIndex='-1' onBlur={handleBlur} className='absolute z-50 h-16 w-48 bg-[#151720] backdrop-blur-md text-white p-2 ps-4 rounded-lg outline-none' style={{ visibility: 'hidden', pointerEvents: "none", top: 0, left: 0 }}>
        <p className='text-white capitalize' id='const-name'>{constName}</p>
        <a onClick={handleClick} className='text-blue-600 text-xs cursor-pointer'>Click here to see details</a>
      </div>
      <div className='absolute uppercase text-[30px] lg:text-[70px] text-white bottom-0 w-3/4 text-center rounded-tl-full lg:w-1/3 px-4 py-4 lg:ps-16 lg:py-8 bg-gray-500 left-full transform -translate-x-full'>
          kepler 62e
      </div>
      <div className='absolute top-3 right-7'>
        <img width={75} src={icon} alt=" " />
      </div>
    </>
  );
};
