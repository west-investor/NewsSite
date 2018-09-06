import React from 'react';

import article from '../article';
import './postInfo.css'

const PostInfo = () => (
    <div className="info-wrap">
        <div className="info-location mr-2"><a href="">{article.location}</a></div>
        <div className="info-date mr-2">{article.date}</div>
        <div className="info-views">{article.views}</div>
    </div>
)

export default PostInfo