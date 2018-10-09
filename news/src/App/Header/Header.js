import React from 'react';

import './header.css';
import postImg from './post-image.jpeg'
import Logo from './Logo/Logo';

const Header = () => (
    <header className="header">
        <img src={postImg} alt=""></img>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Logo/>
                </div>
                
            </div>
        </div>
        
    </header>
)



export default Header