import React from 'react'
import { useLocation } from 'react-router-dom'

const DemoForImage = () => {
    const location = useLocation();
    console.log(location)
  return (
    <div>after image Click</div>
  )
}

export default DemoForImage