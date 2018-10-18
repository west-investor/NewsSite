import React, {Component} from 'react';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../News/newsListItem.css';


class NewsLikeItem extends Component {
    

    onLike = () => {
        if (this.props.isLiked) {
            this.props.articleDislike(this.props.id)
        } else {
            this.props.articleLike(this.props.id)
        }
    }

    render ()
     { 
        const {
            id,
            image,
            isLiked,
            title,
            date,
            author,
            category,
            description,
        } = this.props
        
        
        return (  isLiked ? (
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
                {/* <div className="news-tags detail-link">Tags: <a href="">{tags[0]},</a><a href="">{tags[1]},</a><a href="">{tags[2]},</a></div> */}
            </div>
            <div className="news-description">{description} <Link exact to={`/${id}`}>...continue reading</Link></div>
            <button onClick={this.onLike}>
                {
                    isLiked ? <span>&#9829;</span> : <span>&#9825;</span>
                }
            </button>
        </div>
    </div>
    
            ):<div></div>)}
}

const mapStateToProps = (state,props) => {
    return {
        isLiked:state.articleReducer[props.id],
    }
}

const mapDispatchToProps = (dispatch) => ({
    articleLike: (id)=> dispatch({
        type:"LIKE",
        id:id,
    }),
    articleDislike: (id)=> dispatch({
        type:"DISLIKE",
        id:id,
    })
})



export default connect(mapStateToProps,mapDispatchToProps)(NewsLikeItem)