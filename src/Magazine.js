import React from 'react';

import './Magazine.css';

export default function Magazine({ title, author, content, url, urlToImage }) {
	return (
		<div className="news">
			<img className="news-image" src={urlToImage} alt="" />
			<h1 className="news-title">{title}</h1>
			<p>{content.substring(0,150)+'...'}</p>
			<p>Author : <span style={{'color': '#333333'}}>{author}</span></p>
			<button className="read-btn">
				<a href={url}>Read More</a>
			</button>
		</div>
	);
}
