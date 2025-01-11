import React from 'react'
import './Performance.css'
import Image1 from './Image1'
import Image2 from './Image2'
import Image3 from './Image3'
const Performance = () => {
  return (
    <div className='performance'>
        <h1>Performance</h1>
        <Image1/>
        <h2>Fundamentals</h2>
        <div className='image'>
            <Image2/>
            <Image3/>
        </div>
    </div>
  )
}

export default Performance