import React from 'react';

import news from './news';

const NewsListItem = () => (
    <div className="news-list-item">
        <div className="news-image">
            <img src={news.image} alt=""></img>
        </div>
        <div className="news-info">
            <h2>{news.title}</h2>
            <div className="news-detail">
                <div className="news-date">{news.date}</div>
                <div className="news-author">{news.author}</div>
                <div className="news-category">{news.category}</div>
                <div className="news-tagss">{news.tagss}</div>
            </div>
            <div className="news-description">{news.description}</div>
        </div>
    </div>
)



export default NewsListItem