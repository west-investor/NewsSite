import React from 'react';
import './newsNav.css'
import {Link} from 'react-router-dom'

const NewsNav = () => (
    <div className="news-nav">
    <Link exact to="/Likes/liked">Liked News</Link>
        {/* <div className="search-news">
            <form>
                <label for="search">Search</label>
                <input type="text" id="search" placeholder="enter news name"></input>
            </form>
            <div className="categories_comments">
                <div className="switch-comments_categories">
                    <div className="categories">
                        <Link exact to="/Likes/liked">Categories</Link>
                    </div>
                    <div className="comments">
                        Recent Comments
                    </div>
                </div>
                <div className="all-categories">
                    <div>Wordpress</div>
                    <div>Magento</div>
                    <div>Internet Marketing</div>
                    <div>eCommerce</div>
                    <div>Online Security</div>
                    <div>SEO</div>
                </div>
                <div className="news-type">
                    <div className="recent_popular_achived-news">
                        <div className="recent-news">Recent</div>
                        <div className="popular-news">Popular</div>
                        <div className="achived-news">Achived</div>
                    </div>
                    <div className="all-recent">
                        <div className="">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
    </div>
)



export default NewsNav 