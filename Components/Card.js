import React from 'react'
import "./Home.css"

const Card = ({img}) => {
  return (
    <img src={img} alt='cover' className='card' />
  )
}

export default Card