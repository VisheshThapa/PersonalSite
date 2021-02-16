import React from 'react';
import {motion} from "framer-motion";
import noKnot from '../components/noknot.PNG';
import workoutimg from '../components/workoutapp.PNG';

const Projects =({pageVariants, pageTransition})=>{

return(

<motion.div style = {{position: "absolute"}} class="row" initial = "initial" animate = "in" exit = "out"
 variants = {pageVariants} transition = {pageTransition}>
    <h1>Projects</h1>
  <div class="leftcolumn">
    
    <div class="card">
      <h2 style={{marginBottom: "10px"}} >noKnot</h2>
      
      <img  src = {noKnot} alt = "noKnotImg" style={{height: "20rem", width: "auto"}}></img> 

      <p style = {{marginTop:"10px"}}>This is a 3D printed wiremagement system which was created in solid works. It comes two main parts, which is the base and the screws, along with several accessocies which can be attached to the base. The screws are threaded so they easily fit into the base and can be stuck to any desk. This block allows for a center area where wires can be concentrated into. This was created in partnership with my solidworks team at UBC.</p>
        <hr style = {{marginTop:"10px"}}/>
    </div>
    
    <div class="card">
      <h2 style={{marginBottom: "10px"}}>Random Workout Generator</h2>
      
      <img  src = {workoutimg} alt = "workoutImg" style={{height: "400px"}}></img> 
      <p style = {{marginTop:"10px"}}>This is a random workout generator which was created in Python with the use of tkinter library. The python application works by reading a txt file which contains the excercise list and creates a workout based on the inputs the user gives. The user can pick the body part, the number of sets and number of excercies per body part. Currently, the greatest limitation of this application is that it can only access the excercises that are in the txt file. I would like to improve it further by the use of the BeautifulSoup library allowing the application to acces online resources to gain a multitudes to excercies that the application can use.</p>
        <hr style = {{marginTop:"10px", marginBottom: "20px"}}/>
    </div>

  </div>
  </motion.div>
    );
}

export default Projects;