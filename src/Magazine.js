import React from 'react'

import style from './Magazine.css';

export default function Magazine({title,author,description,url,urlToImage}) {
    return (
        <div className = {style.news}>
            <img src = {urlToImage}  alt = ""/>
            <h1 className = "news-title">{title}</h1>
            <p>{description}</p>
            <p>Author : {author}</p>
          <button><a href={url}>Read More</a></button>

        </div>
    )
}
