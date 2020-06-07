import React from 'react';
import AlbumSongsSec2 from './AlbumSongsSec2'


const AlbumSongslist=({albumsongsdata}) => {

      return (
         
         <div>
           
            {

                  albumsongsdata.map((user,i) => {

                  return (
                  
                       
                     <AlbumSongsSec2
                    
                     key={albumsongsdata[i].id}
                      id={albumsongsdata[i]._id} 
                      artist={albumsongsdata[i].artist}
                       name={albumsongsdata[i].name} 
                       mood={albumsongsdata[i].mood}
                       url={albumsongsdata[i].url}
                       
                     //   key={playlistsongsdata[i].id}
                     //   id={playlistsongsdata[i].id} 
                     //   name={playlistsongsdata[i].name}
                     //    username={playlistsongsdata[i].username} 
                     //    website={playlistsongsdata[i].website}
                       
                       
                       
                       />  
         
                         );
         
                     })

   
             }                  
   
         </div>
               
         );



    }

       
       export default AlbumSongslist;