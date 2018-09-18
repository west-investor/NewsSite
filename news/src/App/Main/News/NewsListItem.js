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
            <h2><span>{title}</span></h2>
            <div className="news-detail">
                <div className="news-date pr-2">{date}</div>
                <div className="news-author pr-2 detail-link">By <a href="">{author}</a></div>
                <div className="news-category pr-2 detail-link" >In <a href="">{category}</a></div>
                <div className="news-tags detail-link">Tags: <a href="">{tags[0]},</a><a href="">{tags[1]},</a><a href="">{tags[2]},</a></div>
            </div>
            <div className="news-description">{description}</div>
        </div>
    </div>
)



export default NewsListItem