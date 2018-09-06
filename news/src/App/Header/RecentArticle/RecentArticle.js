import React from 'react';
import './recentArticle.css';
import article from './article';
import PostInfo from './PostInfo/PostInfo';

const RecentArticle = () => (
    <div className="recentArticle">
        <div className="post-meta">
            <div className="post-title">
                <h3><a href="">{article.title}</a></h3>
            </div>
            <div className="post-info">
                <PostInfo/>
            </div>
        </div>
    </div>
)



export default RecentArticle