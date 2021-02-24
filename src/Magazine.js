import React from 'react'

export default function Magazine({title,author,description,url,urlToImage}) {
    return (
        <div>
            <img src = {urlToImage}  alt = ""/>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{author}</p>
          <button><a href={url}>Read More</a></button>

        </div>
    )
}
