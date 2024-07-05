import React from "react";
import "../styles/menuitem.css";
import { Link } from "react-router-dom";


function MenuItem({ image, name, descr, link }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {descr} </p>
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <button className="btn-link">View Source Code</button>
      </Link> 
    </div>
  );
}
  
export default MenuItem;
