import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
    // Default date set to current date
    const defaultDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <article>
            <h3>{title}</h3>
            {/* Use <time> element for date */}
            <time dateTime={date}>{date || defaultDate}</time>
            <span> {minutes} min read</span>
            <p>{preview}</p>
        </article>
    );
};

export default Article;
