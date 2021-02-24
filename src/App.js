import React , {useState,useEffect} from 'react';
import './App.css';

import Magazine from './Magazine';
import logo from "./BT-Logo.jpg"

function App() {

  const APP_KEY = "8d8e00879669413c882aeca7eaab3997";
  
    const[news,setNews] = useState([]);

    const[search,setSearch] = useState("");

    const[query,setQuery] = useState("fun")

    useEffect(()=>{
      getNews();
 },[query])

const getNews = async() => {
const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-02-24&sortBy=popularity&pageSize=10&apiKey=${APP_KEY}`);
const data = await response.json();

setNews(data.articles);
console.log(data.articles)

} 
const updateSearch =e=>{
setSearch(e.target.value)
console.log(search)
}

const getSearch =e=>{
e.preventDefault();
setQuery(search);
setSearch("")
}









  return (
    <div className="App">
      <div className ="fixed-header"> 
      <img  className = "logo"src={logo} alt = ""/>
     
      
       </div>
       <h1 className = "header-text">BT React Code Test - by Mursel  Aysan - 25/02/21</h1>
      <form onSubmit ={getSearch} className ="search-form">
        <input className ="search-bar" type ="text" value ={search} onChange = {updateSearch}/>
        <button  className ="search-button" type ="submit">Search</button>
      </form>
      {news.map((item,index)=>(
        <Magazine
        key={index} 
        title = {item.title} 
        author = {item.author}
        description = {item.description}
        urlToImage= {item.urlToImage}
        url = {item.url}
        />
      ))}
      <div className = "fixed-footer">Footer</div>
    </div>
  );
}

export default App;
