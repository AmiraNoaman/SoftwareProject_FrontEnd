import React from 'react';
import PlaylistSongsSec2 from './PlaylistSongsSec2'


const PlaylistSongslist=({playlistsongsdata}) => {

      return (
         
         <div>
           
            {

               playlistsongsdata.map((user,i) => {

                  return (
                  
                       
                     <PlaylistSongsSec2
                    
                     // key={playlistsongsdata[i].id}
                     //  id={playlistsongsdata[i].id} 
                     //  artist={playlistsongsdata[i].artist}
                     //   album={playlistsongsdata[i].album} 
                     //   songname={playlistsongsdata[i].songname}
                       
                       key={playlistsongsdata[i].id}
                       id={playlistsongsdata[i]._id} 
                       name={playlistsongsdata[i].name}
                        artist={playlistsongsdata[i].artist} 
                        genre={playlistsongsdata[i].genre} 
                        url={playlistsongsdata[i].url} 
                  
                       
                       
                       
                       />  
         
                         );
         
                     })

   
             }                  
   
         </div>
               
         );



    }

       
       export default PlaylistSongslist;