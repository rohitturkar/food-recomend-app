import React from 'react'
import "./style.css"
// import Menu from"./menuApi"

function Menucard({currentData}) {
    
  return (
    <>
    <section className="main-card-cointainer">
{currentData.map((currElem)=>{
return (
    <>
<div className="card-container" key={currElem.id}>
<div className="card">
    <div className="card-body">
    <span className="card-number card-circle subtle">{currElem.id}</span> 
    <span style={{color:"red"}} className="card-author subtle">{currElem.name}</span>
    <h2 className="card-title">{currElem.name}</h2>
    <span className="card-description subtle">
    {currElem.description}
    </span>
    <div className="card-read">Read</div>
    </div>
    <img src={currElem.image} className="card-media"/>
    <span className="card-tag subtle">Order Now</span>
</div>
</div>
</>
)
})}
</section>
</>
 );
  
}

export default Menucard;