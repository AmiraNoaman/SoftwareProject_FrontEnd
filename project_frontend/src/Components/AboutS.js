import React from 'react';
import './AboutS.css';
import iconS from '../iconS.JPG';
import instas from '../insta.png';
import facebook from '../facebook1.png';
import twitter from '../twitter1.png';
const AboutS=()=>{


    return(
    
        <div id="About" className=" flex items-top  mw-100 center ph3-ns " >
            <div id="icon" className=" fl w-100 w-20-ns pa2 ">
                <div className="pv4">
                    <a href="#"> <img className="img1" src={iconS}/> </a>
                </div>
            </div>

            <div id="company" className=" fl w-100 w-20-ns pa2 ">
                <div className="pv4">
                    <a href="#"> <h4 id="c"  className=' f4 lh-copy  mt0'>company</h4></a>
                    <a href="#"><h4 id="C"  className='f5 lh-copy mt0'>About</h4></a> 
                    <a href="#"><h4 id="C"  className='f5 lh-copy mt0'>For The Record</h4></a>
                </div>
            </div>
            
            <div id="communities" className=" fl w-100 w-20-ns pa2">
                <div className="pv4">
                    <a href="#"> <h4 id="c"  className=' f4 lh-copy mt0'>communities</h4></a>
                    <a href="#"> <h4 id="C"  className=' f5 lh-copy mt0'>for Artists</h4></a>
                    <a href="#"><h4 id="C"  className='f5 lh-copy mt0'>developers</h4></a>
                    <a href="#"><h4 id="C"  className='f5 lh-copy mt0'>Brands</h4></a>
                </div>
            </div>
            <div id="usefulLinkes" className="fl w-100 w-20-ns pa2 ">
                <div className="pv4">
                    <a href="#"> <h4 id="c"  className=' f4 lh-copy mt0'>useful Linkes</h4></a>
                    <a href="#"> <h4 id="C"  className='f5 lh-copy mt0'>Help</h4></a>
                    <a href="#"><h4 id="C"  className=' f5 lh-copy mt0'>Web Player</h4></a>
                    <a href="#"><h4 id="C"  className=' f5 lh-copy mt0'>free Mobile App</h4></a>
                </div>
            </div>
            <div id="icons" className="fl w-100 w-20-ns pa2">
                <div className="pv4">
                    <a href="#"><img className="imgi" src={instas}/></a>
                    <a href="#"><img className="imgf" src={facebook}/></a>
                    <a href="#"><img className="imgt" src={twitter}/></a>
                </div>
            </div>

        </div>
    


    );
}
export default AboutS;