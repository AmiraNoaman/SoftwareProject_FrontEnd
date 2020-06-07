import React from 'react';
import './PlaylistInsideSec1.css';



const PlaylistInsideSec1=({id,url,name}) =>{

  
    return (
              
        <div className=" pt5 ">
            <div className='tc'>
            <img src={url} alt=" no image" className=" w-60 h-60 image3"/>
            
            <div className="playlistName pt2">{name}</div>
            <div className="playlistCreator pt1 pb3">Spotify</div>

            <div className="play-container">
                <button className="play" type="button">Play</button>
            </div>
           
            <div className="playlist-No-of-songs pt2">10 Songs</div>

            <div className="pt3">
                <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b807c077bbfd2ec9272_heart.png" alt="no" className="pr2"/>
                <img src="https://uploads-ssl.webflow.com/5e36ddfda3d85b56ce206efc/5e374b80a3d85b6ff824af5e_3dots.png" alt="no"/>
            </div>
            
            </div>
      </div>


        
  
    );

    

}
    
    export default PlaylistInsideSec1;