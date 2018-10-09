import React from 'react'
import "../News/newsListItem.css"
import "./newsPage.css"





const NewsPage =({ match,title,id,description,author,tags,category,date,image })=> console.log(match)||(
    <div className="newsPage">
        <div className="article">
            <div className="article-photo">
                <img className="article-image" src={image} alt="1"></img>
                <div className="article-title">
                    <h3>{title}</h3>
                </div>
            </div>
            
            <div className="article-tags news-detail">
                <div className="news-date pr-2">{date}</div>    
                <div className="news-author pr-2 newsDetail-link">By <a href="">{author}</a></div>
                <div className="news-category pr-2 newsDetail-link" >In <a href="">{category}</a></div>
                <div className="news-tags detail-link">Tags: <a href="">{tags[0]},</a><a href="">{tags[1]},</a><a href="">{tags[2]},</a></div>
            </div>
            <div className="article-description">
                <p>{description}</p>
            </div>
        </div>
    </div>           
)
  
    // {
    //     news.reduce((prev,product) => (
                
    //         <div className="news-list-item " key={[product].id}><h1>{prev.title}</h1>
    //     <div className="news-image">
    //         <a href=""><img src={product.image} alt=""></img></a>
    //     </div>
    //     <div className="news-info">
    //         <h2><span>{product.title}</span></h2>
    //         <div className="news-detail">
    //             <div className="news-date pr-2">{product.date}</div>    
    //             <div className="news-author pr-2 detail-link">By <a href="">{product.author}</a></div>
    //             <div className="news-category pr-2 detail-link" >In <a href="">{product.category}</a></div>
    //             <div className="news-tags detail-link">Tags: <a href="">{product.tags[0]},</a><a href="">{product.tags[1]},</a><a href="">{product.tags[2]},</a></div>
    //         </div>
    //         <div className="news-description">{product.description} ...continue reading</div>
    //     </div>
    // </div>
    
    // ))

//     }
    
            
        
    
// </div>


export default NewsPage