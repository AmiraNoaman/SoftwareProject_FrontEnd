import React from 'react';
// import capture from './capture.PNG';
import laptop from '../laptop.svg';
// import 'tachyons';
import './Section1.css'
import NavBar from './NavBar'

const Section1=() =>{


return (

<div id= "section1">

    

    <div className="tl" > 
         <NavBar></NavBar>


         
      <div className="lap tc">
           <img  id="laptop" src={laptop} alt="logo" />
      </div>

         <div className="pt6">
               <h1 id="header1" className='f1 lh-title white tc'> Click the install file to finish up.</h1>
         </div>

        
         <div id='paraheader2' className=' fw4 f5 lh-copy tc '>

               <p className="black fw4">If your download didn't start,<u className=" fw4 underline white link dim b"> try again </u>.</p>
               <p className="black fw4"> Having issues? <u className=" fw4 underline white link dim b">Visit the Microsoft Store</u> to download.</p>
         </div>
               
      </div>


</div>  

);

}

export default Section1;