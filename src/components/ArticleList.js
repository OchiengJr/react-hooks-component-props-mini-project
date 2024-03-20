import React from 'react';
import Article from "./Article";

const ArticleList = ({ posts }) => {
    return (
        <main>
            {/* Ensure that posts is not null or undefined before mapping */}
            {posts && posts.map(({ id, title, date, preview, minutes }) => (
                <Article 
                    key={id} 
                    title={title} 
                    date={date} 
                    preview={preview}
                    minutes={minutes}
                />
            ))}
        </main>
    );
}

export default ArticleList;
