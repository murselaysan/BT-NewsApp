import React from 'react'

import "./Magazine.css";

export default function Magazine({title,author,description,url,urlToImage}) {
    return (
        
        <div className ="news">
            <img className = "news-image" src = {urlToImage}  alt = ""/>
            <h1 className = "news-title">{title}</h1>
            <p>{description}</p>
            <p>Author : {author}</p>
          <button><a href={url}>Read More</a></button>

        </div>
       
    )
}
