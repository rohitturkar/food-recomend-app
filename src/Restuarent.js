import React, { useState } from 'react'
import "./style.css"
import Menu from"./menuApi.js"
import Menucard from "./menucard"
const Resturant = () => {
 const [menuData, setMenuData]=useState(Menu);
 const filterItem=(category)=>{
    const updatedList=Menu.filter((currElem)=>{
  return currElem.category===category;
    });
    setMenuData(updatedList);
 }
  return (<>
  <nav className="navbar">
    <div className="btn-group">
  <button className="btn-group__item" onClick={()=> filterItem("breakfast")}>Breakfast</button>

  <button className="btn-group__item" onClick={()=> filterItem("lunch")}> Lunch</button>

  <button className="btn-group__item"onClick={()=> filterItem("evening")}>Evening</button>

  <button className="btn-group__item"onClick={()=> filterItem("dinner")}>Dinner</button>

  <button className="btn-group__item" onClick={
    ()=>setMenuData(Menu)}>All</button>

    </div>
  </nav>
  <Menucard currentData={menuData} />
</> 
);
};

export default Resturant;