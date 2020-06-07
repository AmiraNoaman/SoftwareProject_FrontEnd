import React from 'react';
import './PlaylistSongsSec2.css';
import '../Containers/PlaylistInsidePage.css';
import {useSelector,useDispatch} from 'react-redux'
import {Stream} from '../Redux/songs/StreamActions'
import {LoadSongs} from '../Redux/songs/StreamActions'
import cairoke from './cairokee.mp3'

const PlaylistSongsSec2=({id,url,genre,artist,album ,name}) =>{

const Dispatch=useDispatch()

// Dispatch(LoadSongs({id:'1',url:'1',name:'1',artist:'1'}))

  
    return (
              
     <div >

        <div onClick={()=>Dispatch(Stream(url))} className="Song">

                <div ><div>
                    <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e38aae52c275481b5f9d25b_transPlay.png"   alt="" className="image2" id="play"/>
                    <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e39d9e5cbba74b07e06e9ee_noteTrans.png" alt="" className="image9" id="music"/></div>

                <div>
                    <div>
                        {name}
                    </div>
                    <div className="Song-Name-and-Artist">

                    <div className='pr2 singername'>{artist}</div> -
                    <div className=' pl2 albumname'>{genre}</div>

                    </div>
                </div>

                </div>

                <div className="Song-Name-and-Artist">
                <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png" className='pr2' alt=""/>
                <div>4:12</div>
                </div>

        </div>


    </div>

        
  
    );

    

}
    
    export default PlaylistSongsSec2;