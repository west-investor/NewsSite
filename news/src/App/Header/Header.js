import React from 'react';

import './header.css';
import Logo from './Logo/Logo';
import RecentArticle from './RecentArticle/RecentArticle';

const Header = () => (
    <div className="header">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-lg-12">
                    <Logo/>
                </div>
                <div className="col-lg-12">
                    <RecentArticle/>
                </div>
            </div>
        </div>
    </div>
)



export default Header