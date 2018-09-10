import React from 'react';


import './newsListItem.css';


const NewsListItem = ({
    image,
    title,
    date,
    author,
    category,
    description,
    tags,
}) => (
    <div className="news-list-item">
        <div className="news-image">
            <img src={image} alt=""></img>
        </div>
        <div className="news-info">
            <h2>dfd{title}</h2>
            <div className="news-detail">
                <div className="news-date">{date}</div>
                <div className="news-author">{author}</div>
                <div className="news-category">{category}</div>
                <div className="news-tags">{tags}</div>
            </div>
            <div className="news-description">{description}</div>
        </div>
    </div>
)



export default NewsListItem