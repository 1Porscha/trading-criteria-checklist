import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            {/* <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li> */}
        </ul>
       
    </div>
  )
}

export default Navbar