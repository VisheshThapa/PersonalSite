import React, {Component} from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa'

export default class Footer extends Component{
render(){
 return(
    <footer>
       <div className = "social-container">
       <a href = "https://www.linkedin.com/in/vishesh-jung-thapa-4315a61a6/" className = "social" >
          <FaLinkedin size = "1.4rem"/>
       </a>
       <a href = "https://github.com/VisheshThapa/" className = "social">
          <FaGithub size = "1.4rem"/>
       </a>
       <a href = "https://grabcad.com/vishesh.thapa-2/models" id = "grabCAD" className = "social">
          GrabCAD
       </a>
       </div>
    </footer>
 );   
}
};