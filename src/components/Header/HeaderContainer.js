import React from 'react';
import Menu from './Menu';
import Logo from './Logo';

import "./header.css";

function HeaderContainer(){
    return(
        <div className='header'>
            <Logo />
            <Menu />
        </div>
        
    )
}

export default HeaderContainer