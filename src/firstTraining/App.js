import React from 'react'
import './App.css';
import Box5 from './components/Box.5'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3/Box3'
import Box4 from './components/Box4'

function FirstApp() {
  return (
    <div className='App'>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
    </div>
      
  )
} 

export default FirstApp