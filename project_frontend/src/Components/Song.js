import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Song.css';
import ReactDOM from 'react-dom';
import {useSelector,useDispatch} from 'react-redux'
import {Stream} from '../Redux/songs/StreamActions'
var check
const $ = window.$;


const Song = ({ name,length,link }) =>{

function tog(){

    console.log("blah")
}
const dispatch = useDispatch()
{console.log({link})}
        return(
          

       <div className="w-dyn-item" onClick={()=>dispatch(Stream(link))}>
           
      <div data-w-id="d18ccf74-1d76-0cb8-bfbf-22b62c6e332e" className="song">
      <div className="div-block-5"><div>
        <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"   alt="" className="image-2" id="play"/>
        <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" class="image-9" id="music"/></div>
      <div>
      <div className="song-name">{name}</div>
      <div className="song-name-and-artist">
      <div>{length}</div><div> - 
      </div><div></div></div></div></div><div className="song-name-and-artist">
      <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png"  alt="" class="image-6"/>
      <div>{length}</div>
      </div></div>
      </div>
        );
    
}
export default Song;