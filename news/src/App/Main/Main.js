import React from 'react';

import {Route} from 'react-router-dom'
import NewsList from './News/NewsList'
import NewsNav from './NewsNav/NewsNav'
import NewsPage from './NewsPage/NewsPage'
import RecentArticle from './RecentArticle/RecentArticle';
import news from './News/news'
import NewsLikes from './NewsLikes/NewsLikes'



const Main = () => (
    <main className="main">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <RecentArticle/>
                </div>
                <div className="col-lg-9">
                <Route exact path="/:articleId" render={({match})=><NewsPage  {...news.find((article)=>article.id == match.params.articleId)}/>}/>
                <Route exact path="/" render={()=><NewsList/>}/>
                <Route exact path="/Likes/liked" render={()=><NewsLikes  id={news.map((elem)=>elem.id)}/>}/>
                
                </div>
                <div className="col-lg-3" >
                    <NewsNav />
                </div>
            </div>
        </div>
    </main>
)







export default Main 