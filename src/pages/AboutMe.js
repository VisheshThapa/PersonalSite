import React from 'react';
import {motion} from "framer-motion";
import BullPic from '../components/bullpic.jpg';
const AboutMe =({pageVariants, pageTransition})=>{

return(<motion.div style = {{position: "absolute"}} class = "home" id = "About" initial = "initial" animate = "in" exit = "out" 
variants = {pageVariants} transition = {pageTransition}>
<img src = {BullPic} alt = "home_pic" class = "home_image"/>

<div class = "aboutme_text" style = {{marginLeft: "20px"}}>
<h2>About Me:</h2>
<p class = "aboutme_text_p">
Born and raised in Nepal, I am an international student studying at the University of 
British Columbia's Okanagan Campus. From a young age I have always been
 very passionate about emerging and new technologies and have carried that over in my adult life. 
</p>

<p class = "aboutme_text_p">
I choose Mechanical Engineering because I am someone 
who like to tinker with robotics. This is one of
 the reason that I choose Mechatronics as my specialization. To advance my abilities in the field  
 of robotics I study electrical engineering, business and computer science concepts 
 outside of my university classes. 
</p>

<p class = "aboutme_text_p">
I attribute my interest in building projects as my main reason for being in this field. I enjoy being
able to create products that others can enjoy.
</p>

</div>


</motion.div>);
}

export default AboutMe;