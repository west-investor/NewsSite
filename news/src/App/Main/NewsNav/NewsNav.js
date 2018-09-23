import React from 'react';
import './newsNav.css'

const NewsNav = () => (
    <div className="news-nav">
        <div className="search-news">
            <form>
                <label for="search">Search</label>
                <input type="text" id="search" placeholder="enter news name"></input>
            </form>
            <div className="categories_comments">
                <div className="switch-comments_categories">
                    <div className="categories">
                        Categories
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
        </div>
        
    </div>
)



export default NewsNav 