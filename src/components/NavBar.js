import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(  
  <div>
<ul>
<li><NavLink to="/" exact style={{marginRight:"8px"}}>Home</NavLink></li>
<li><NavLink to="/movies" exact style={{marginRight:"8px"}} >Movies</NavLink></li>
<li><NavLink to="/directors" exact style={{marginRight:"8px"}} >Directors</NavLink></li>
<li><NavLink to="/actors" exact>Actors</NavLink></li>
</ul>
  </div>
  )
}

export default NavBar;
