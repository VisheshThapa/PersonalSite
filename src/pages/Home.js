import React from 'react';
import Pic from '../components/IMG_0509.png';
import {motion} from "framer-motion";
import {BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs';

const Home =({pageVariants, pageTransition})=>{

return(
<motion.div  style = {{position: "absolute"}} class = "home" id = "Home" initial = "initial" animate = "in" exit = "out" 
variants = {pageVariants} transition = {pageTransition}>
    
    <img src = {Pic} alt = "home_pic" class = "home_image"/>
    
<div class = "home_text">
<h1 class = "home_intro">
    Hello my name is Vishesh Jung Thapa. 
</h1>

<h1 class = "home_intro2">
I am a student of Mechanical Engineering
    at the University of British Columbia
</h1>

<h2 class = "home_inst">
    Welcome to my personal website! This website was created from scratch in React.
</h2>
<h2 class = "home_inst">
    Email: visheshjungthapa@gmail.com
</h2>

<div class = "abilities">
<h2> My Abilities: </h2>
<div class = "abilities2">
    <ul>
        <li>
            <span class = "ability_title">SolidWorks: </span>
            <span class = "ability_score">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStar/>
            </span>
        </li>
        <li>
            <span class = "ability_title">MatLab: </span>
            <span class = "ability_score">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/>
            <BsStar/>
            
            </span>
        </li>
        <li>
            <span class = "ability_title">RStudio: </span>
            <span class = "ability_score">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStar/>
            <BsStar/>
            
            </span>
        </li>
        <li>
            <span class = "ability_title">C++: </span>
            <span class = "ability_score">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/>
            <BsStar/>
            
            </span>
        </li>
        <li>
            <span class = "ability_title">HTML: </span>
            <span class = "ability_score">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/>
            
            </span>
        </li>
        <li>
            <span class = "ability_title">CSS: </span>
            <span class = "ability_score">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStar/>
            <BsStar/>
            
            </span>
        </li>
        <li>
            <span class = "ability_title">JavaScript: </span>
            <span class = "ability_score">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStar/>
            
            </span>
        </li>
        <li>
            <span class = "ability_title">React: </span>
            <span class = "ability_score">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/>
            <BsStar/>
            
            </span>
        </li>
    </ul>
</div>
</div>
</div>


</motion.div>);
}

export default Home;
