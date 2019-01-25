import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <a href="index.html">Home</a>
            <a href="www.apple.com">About</a>
            <a href="#portfolio">Portfolio</a>
            <Link to='/contact' >Contact</Link>
        </nav>

    )
}

export default Menu