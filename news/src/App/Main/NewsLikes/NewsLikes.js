import React from 'react';

import NewsLikeItem from './NewsLikeItem';
import news from '../News/news';





const NewsLikes = () => (
    
    <div className="news-list">
    { 
        news.map(({
            
            id,
            image,
            title,
            date,
            author,
            category,
            description,
            tags,
        }) => (
            <NewsLikeItem 
                id={id}
                image={image}
                title={title}
                date={date}
                author={author}
                category={category}
                description={description}
                tags={tags}
                key={id}
                
            />
                )
       
    
            ) 
    }
    
</div>
)






export default NewsLikes
