import React from "react";
import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div className="nav">
            <div >
         <h1>khan'world</h1>
         </div>
         <div className="navright">
            <li>
                <Link  to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
         </div>
        </div>
        
        
    )
}
export default Nav;