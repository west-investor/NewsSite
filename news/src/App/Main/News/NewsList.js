import React from 'react';

import NewsListItem from './NewsListItem';
import news from './news';


const NewsList = () => (
    
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
            <NewsListItem 
                id={id}
                image={image}
                title={title}
                date={date}
                author={author}
                category={category}
                description={description}
                tags={tags}
            />
                )
       
    
            ) 
    }
</div>
)

export default NewsList