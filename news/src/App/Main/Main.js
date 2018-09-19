import React from 'react';

import NewsList from './News/NewsList'
import NewsNav from './NewsNav/NewsNav'

const Main = () => (
    <main className="main">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <NewsList />
                </div>
                <div className="col-lg-3" >
                    <NewsNav />
                </div>
            </div>
        </div>
    </main>
)



export default Main 