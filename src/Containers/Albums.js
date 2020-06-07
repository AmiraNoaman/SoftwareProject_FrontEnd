import React, {Component} from 'react';
import './Albums.css';
import PlaylistHeader from '../Components/PlaylistHeader'
import AlbumCardList from '../Components/AlbumCardList';
//import {albumsdata} from '../Components/albumsdata';

// import MediaQuery from 'react-responsive';
class Album extends Component {

  constructor(props) {        
    super(props)
    this.state= {

        albumsdata: [],  
        CardIDA:" ",                      
   
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

fetch('http://1.2.3.4.5.6/api/likedAlbums',requestOptions)

.then(response=>{
  return response.json();
})
.then(users=>{
  this.setState({albumsdata:users});
  console.log("fetching")
});



}

PlayMusicA =(event) =>{                                            
  this.setState({ CardIDA: event.target.getAttribute('ida') })
  console.log(this.state.CardIDA)  
  console.log(this.state.albumsdata[(this.state.CardIDA)-1])

  console.log("Play the song")  
  
                                                                  
}


  render() {

    const {albumsdata} =this.state

    if(albumsdata.length===0){

      return(
        <div className="load2">
            <p><p className="loader2 mr3 tc"></p>
            <h3 >loading, please wait..</h3></p>
        </div>)

    }
    else {

    return (

      
      <div className="conatiner d-felx vh-100 w-100 dt" id="cardsplaylist">


          <h1 className='pl3 fw7 pt5 f3 lh-title white'> Albums</h1>
                
            {/* <PlaylistHeader></PlaylistHeader> */}
           <AlbumCardList 
            MusicA={this.PlayMusicA}
           albumsdata={albumsdata}
           />

    
      </div>

    );
    }

  }

}

export default Album;
