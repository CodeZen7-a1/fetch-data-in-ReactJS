import React, { useState, useEffect } from 'react'
import './App.css'
import Greet from './components/Greet'
import Counter from './components/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashborad/Dashboard'

function App() {
  
  useEffect(()=>{
      const timer = setInterval(()=> {
            console.log("Tick")
        },1000);
        return()=>{
            clearInterval(timer);
            console.log("CleanUp")
        };
    },[])

  return (
    
    <>

    {/* <Dashboard/> */}
    
    
    <Counter/>
    {/* <Greet/> */}
      
    </>
  )
}

export default App
