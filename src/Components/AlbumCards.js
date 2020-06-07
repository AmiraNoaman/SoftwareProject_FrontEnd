import React from 'react';
import './AlbumCards.css';
import './PlaylistCards.css';
import {Link} from 'react-router-dom';



const AlbumCards=({id,url,name,artist,description,StreamMusicA}) =>{

    return (

    <Link to={ `../WebFrame/AlbumInsidePage_${id}`}>

        <div  onClick={StreamMusicA} ida= {id} id="AlbumCards" className=' bg-dark-gray dib h6 br3 pa3 ma2 grow bw2'>
            <div draggable="true">
               <div id="wrapper" className="react-contextmenu-wrapper">

    
                 <img id='cardimage' alt='albumpic' src={url}/>
    
                 <div id='cardtext'>
    
                     <h5  className= " pt3 fw6 f6 white">{name}</h5>
                     <h5  className= "fw1 f6 white">{artist}</h5> 
                     <h5  className= "fw1 f7 white">{description}</h5>
    
                 </div>

                 <div className="boxplaylist">
                    <button 
                    className="Buttonplaylist"  aria-lable="Play"
                    onClick={StreamMusicA} ida= {id}
                    >
                        <svg onClick={StreamMusicA} ida= {id}  height="40" role="img" width="40" viewBox="0 0 80 80">
                            <polygon points="32,25 32,58 60,42" fill="currentColor"></polygon>
                        </svg>
                    </button>
                 </div>
    
               </div>
           </div>
        </div> 

           </Link> 
    
        );

}
    
    export default AlbumCards;