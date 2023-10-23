import React from 'react'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'


const Header = () => {
  return (
    <div className='header'>
         <img src="images/logo.png" alt="logo" />

         <div>
            <Link>TV Shows</Link>
            <Link>Movies</Link>
            <Link>Recently Added</Link>
            <Link>My List</Link>
         </div>
        <BsSearch />
    </div>
  )
}

export default Header