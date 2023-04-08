import React from 'react';
import './Footer.css'
import logo from '../../Asset/Vector.png'

 function Footer(){
    return <footer>
        <div className='Img'>
            <img alt='Logo' src={logo}></img>
        </div>
        <div className='BigContainer'>
            <div className='column'>
                <p>Dgac ScanDoc is a web application that scans all your documents issued into one PDF <br /> file and create a unique and dynamic QR code that can be send via email </p>
                <p>© 2022 DGAC. All rights reserved</p>
                <p>Follow Us</p>
            </div>
            <div className='column'>
                <h1 className='Titre'>Features</h1>
                <p>Upload</p>
                <p>My documents</p>
            </div>
            <div className='column'>
                <h1 className='Titre'>Features</h1>
                <p>About</p>
                <p>FAQ</p>
            </div>
        </div>
    </footer>
}
export default Footer