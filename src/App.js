import './App.css';
import {React} from 'react'
import {BrowserRouter as Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';


function App() {
  document.title = "Vishesh Thapa";

  const location = useLocation();
  
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },

    in:{
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.3
  }
  
  
  return (


      <div className = "page-container" style = {{overflowX: "hidden", position: "relative"}} >

      <Navbar/>
      
      <div >
      <AnimatePresence>
      <Switch location = {location} key = {location.pathname} >
        <Route exact path = '/' component = {Home}>
          <Home pageVariants = {pageVariants} pageTransition = {pageTransition}/>
        </Route>
        <Route path = '/AboutMe' component = {AboutMe}>
          <AboutMe pageVariants = {pageVariants} pageTransition = {pageTransition}/>
        </Route>
        <Route path = '/Projects' component = {Projects}>
          <Projects pageVariants = {pageVariants} pageTransition = {pageTransition}/>
        </Route>
      </Switch>
      </AnimatePresence>
       
      </div>
      
   
      <Footer/>
      </div>
  );
}

export default App;
