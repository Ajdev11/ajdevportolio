import React from "react";
import { useState } from "react";
import './Portfolio.css';
import data from "./data";


function Portfolio(){
    const [item, setItem] = useState(data);
    const filterItem = (cateItem) => {
        const updateItem = data.filter((curElem)=>{
            return curElem.category === cateItem
        })
        setItem(updateItem)
    }
    return (
       <section id="Portfolio" className="portfolio mtop">
        <div className="container">
            <div className="head flexSB">
                <div className="left">
                    <h6>Creative works</h6>
                    <h2>Checkout my Portfolio</h2>
                </div>
            </div>
            <div className="links">
                <ul className="flexSB">
                    <li className="active" onClick={()=>setItem(data)}>All</li>
                    <li onClick={()=>filterItem("Products")}>Products</li>
                    <li onClick={()=>filterItem("Services")}>Services</li>
                    <li onClick={()=>filterItem("Brand Identity")}>SEO</li>
                    <li onClick={()=>filterItem("Web Applications")}>Apps</li>
                </ul>
            </div>
            <div className="content grid mtop">
                {item.map((elem) =>{
                    const {cover, title} = elem;
                    return(
                        <div className="box">
                            <div className="img">
                                <img src={cover} alt="" />
                            </div>
                            <div className="overlay">
                                <h1>{title}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
       </section>
    )
}
export default Portfolio;