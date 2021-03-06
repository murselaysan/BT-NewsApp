import React from 'react'
import logo from "./logo-2018.svg"

const Header = (props) => {
    return (
        <div className="header">
            <div className="logo">
                <a href="/"><img src={logo} alt="app-logo"/></a>
            </div>
            <div className="search">
                <form onSubmit={props.getSearch}>
                    <input className="search-input" type="text" value={props.search} onChange={props.updateSearch} placeholder="Enter news title..."/>
                    <button className="submit-btn" type="submit">
					Search
				</button>
                </form>
            </div>
        </div>
    )
}

export default Header