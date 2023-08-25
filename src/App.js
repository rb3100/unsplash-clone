import React, { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("")
  const [results,setResults]=useState([])
  const fetchImages =()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=a4XTBqCcTPexeCEHEqV6mUA_OBBuw5sfo8OnIwz-LSE&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search:</span>

        {/* a4XTBqCcTPexeCEHEqV6mUA_OBBuw5sfo8OnIwz-LSE */}
        {/* https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY */}
        <input
        style={{width:"60%"}}
         type="text"
          value={value} onChange={(e)=>setValue(e.target.value)} />
        <button onClick={()=>fetchImages()}>Send</button>
      </div>
      <div className="gallery">
        {results.map((item)=>{
          return <img className="item" key={item.id} src={item.urls.regular}></img>
        })}
      </div>
     
    </div>
  );
}

export default App;
