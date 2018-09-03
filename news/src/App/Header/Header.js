import React from 'react';

import Logo from './Logo/Logo';

const Header = () => (
    <div className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Logo/>
                </div>
                <div className="col-lg-12">
                    {/* <Article/> */}
                </div>
            </div>
        </div>
    </div>
)



export default Header