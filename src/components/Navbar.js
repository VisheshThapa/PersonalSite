import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () =>{
  
    return(<>

      <div className = "Navbar">

        <div className = "leftSide">
          <div className = "links">
          <NavLink exact to = "/" className = "NavLink">
          Home
          </NavLink>

          <NavLink exact to = "/AboutMe" className = "NavLink" >
          About 
          </NavLink>

          <NavLink exact to = "/Projects" className = "NavLink">
          Projects
          </NavLink>
          
          </div>
        </div>
      </div>
    </>);

};

export default Navbar;