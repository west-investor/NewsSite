import React from 'react';

import {Link} from 'react-router-dom'
import './newsListItem.css';


const NewsListItem = ({
    id,
    image,
    title,
    date,
    author,
    category,
    description,
    tags,
}) => ( 
    <div className="news-list-item " key={id}>
        <div className="news-image">
            <a href=""><img src={image} alt=""></img></a>
        </div>
        <div className="news-info">
            <h2><span>{title}</span></h2>
            <div className="news-detail">
                <div className="news-date pr-2">{date}</div>    
                <div className="news-author pr-2 newsDetail-link">By <a href="">{author}</a></div>
                <div className="news-category pr-2 newsDetail-link" >In <a href="">{category}</a></div>
                <div className="news-tags detail-link">Tags: <a href="">{tags[0]},</a><a href="">{tags[1]},</a><a href="">{tags[2]},</a></div>
            </div>
            <div className="news-description">{description} <Link to={`/${id}`}>...continue reading</Link></div>
        </div>
    </div>
    
)



export default NewsListItem