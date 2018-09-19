import React from 'react';

import NewsList from './News/NewsList'

const Main = () => (
    <main className="main">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <NewsList />
                </div>
                <div className="col-lg-3" >Filter</div>
            </div>
        </div>
    </main>
)



export default Main 