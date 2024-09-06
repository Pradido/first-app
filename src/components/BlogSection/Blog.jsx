import React from 'react';
import './Blog.css'; // Import the CSS for styling

function Blog() {
    return (
        <div className="blog-container">
            <div className="blog-content">
                <h1>News & Articles</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>

                <div className="search-bar">
                    <input type="text" placeholder="Search blog..." />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M11 2a9 9 0 1 0 4.372 16.992l5.564 5.564 1.414-1.414-5.564-5.564A9 9 0 0 0 11 2zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" fill="rgba(255,255,255,1)" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Blog;
