import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Scene } from './components/Scene'
import { Stars } from './components/Stars'

export const App = () => {

  return (
    <Canvas>
      <Scene />
      <Stars />
    </Canvas>
  )
}