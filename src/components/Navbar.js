import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'

// Create links to different pages

const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
           
        </ul>
       
    </div>
  )
}

export default Navbar