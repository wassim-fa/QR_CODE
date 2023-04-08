import React from 'react';
import './Nav.css'


function Nav() {
    return <nav>
        <div className='navbar'>
            <a href="#">About</a>
            <a href="#">Upload</a>
            <a id='log' href="#">Login</a>
        </div> 
    </nav>
}
export default Nav