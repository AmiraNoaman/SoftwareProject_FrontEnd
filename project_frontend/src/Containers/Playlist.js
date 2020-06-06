import React, {Component} from 'react';
import PlaylistHeader from '../Components/PlaylistHeader'
import PlaylistCardList from '../Components/PlaylistCardList';
// import LikedSongsCard from '../Components/LikedSongsCard';
//import LikedSongslist from '../Components/LikedSongslist';
//import {playlistsdata} from '../Components/playlistsdata';
import {likedsongsdata} from '../Components/likedsongsdata';

import './Playlist.css'

// import MediaQuery from 'react-responsive';
class Playlist extends Component {

  constructor(props) {        
    super(props)
    this.state= {

        playlistsdata:[],  
        likedsongsdata:likedsongsdata ,
        CardID:" ",                      
        //likedsongsdata:[],
       }
}

componentDidMount(){


  const requestOptions = {
    method: 'GET',
    headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',  
    'authorization': sessionStorage.getItem('token'),
    'Accept': 'application/json'},
    }

// fetch('http://1.2.3.4.5.6/api/likedPlaylists',requestOptions)

// .then(response=>{
//   return response.json();
// })
// .then(users=>{
//   this.setState({playlistsdata:users});
//   console.log("fetching")
// });

Promise.all([
  fetch('http://1.2.3.4.5.6/api/likedPlaylists',requestOptions),
  fetch('http://1.2.3.4.5.6/api/likedSongs',requestOptions)
])

.then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))

.then(([res1, res2]) => this.setState({
  playlistsdata: res1, 
  likedsongsdata: res2
}));








}

PlayMusic =(event) =>{                                            
  this.setState({ CardID: event.target.getAttribute('idm') })

  console.log("Play the song")  
  console.log(this.state.CardID)  
  console.log(this.state.playlistsdata[(this.state.CardID)-1])

                                                                  
}

  render() {

    // console.log(this.state.playlistsdata.likedPlaylists)

    const {playlistsdata,likedsongsdata} =this.state

    if(playlistsdata.length===0 || likedsongsdata.length===0){
    
        return(
        <div className="load1">
            <p><p className="loader1 mr3 tc"></p>
            <h3 >loading, please wait..</h3></p>
        </div>)
    }


    else {

    return (

      <div className="vh-100 dt w-100" id="cardsplaylist">
          {/* <PlaylistHeader></PlaylistHeader> */}

                <h1 className='pl3 fw7 pt5 f3 lh-title white'> Playlists</h1>


                <PlaylistCardList 
                Music={this.PlayMusic}
                playlistsdata={playlistsdata} 

                likedsongsdata={likedsongsdata} 

                // likedPlaylists={likedPlaylists} 
                ></PlaylistCardList>
               

      </div>

          );
    }

  }

}

export default Playlist;
