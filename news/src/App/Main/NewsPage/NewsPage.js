import React from 'react'
import "../News/newsListItem.css"
import "./newsPage.css"
import {connect} from 'react-redux'





const NewsPage =({ title,description,author,tags,category,date,image,id,isLiked })=> (
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
                <div className="news-tags detail-link">Tags: <a href="">{tags[0]},</a><a href="">{tags[1]},</a><a href="">{tags[2]}, </a></div>
                <button>
                    {
                        isLiked ? <span>&#9829;</span> : <span>&#9825;</span>
                    }
                </button>
            </div>
            
            <div className="article-description">
                <p>{description}</p>
            </div>
        </div>
    </div>           
)
  
const mapStateToProps = (state,props) => {
    return {
        isLiked:state.articleReducer[props.id],
    }
}


export default connect(mapStateToProps)(NewsPage)