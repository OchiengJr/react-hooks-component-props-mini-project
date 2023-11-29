import React from 'react'

const Article = ({title, date, preview, minutes}) => {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date || "January 1, 1970" }</small> <span> {minutes} min read</span>
            <p>{preview}</p>
            
        </article>
    )
}

export default Article