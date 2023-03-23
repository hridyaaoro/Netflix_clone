import React from 'react'
import './Navbar.css'
import {useEffect,useState } from 'react'

function Navbar() {
  const [show,handleShow]=useState(false) 
  useEffect(()=>{
    //to check events happened or not ..... using inbuild event
    window.addEventListener('scroll',()=>{
        //checking vertically scrolled or not
        if(window.scrollY>250){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    })
  },[]) 
  //checking in console true & false coming when scroll down & up
//   console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img className='logo' 
      src='https://i.postimg.cc/cCfdvcJV/logo1.png'/>
    </div>
  )
}

export default Navbar
