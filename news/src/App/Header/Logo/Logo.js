import React from 'react';
import logoImg from './logo.png';
import './logo.css';
import {Link} from 'react-router-dom'

const Logo = () => (
    <div className="logo">
        <Link to="/"><img src={logoImg} alt=""/></Link>
    </div>
)


export default Logo 