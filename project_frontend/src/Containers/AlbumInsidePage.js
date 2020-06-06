import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AlbumInsidePage.css';
import { RouteComponentProps, matchPath } from 'react-router';
import AlbumInsideSec1 from '../Components/AlbumInsideSec1';
import AlbumSongslist from '../Components/AlbumSongslist';
 //import {albumsdata} from '../Components/albumsdata';
//import {playlistsongsdata} from '../Components/playlistsongsdata';
// import ReactDOM from 'react-dom';
// var check
const $ = window.$;

class AlbumInsidePage extends Component{

  constructor(props) {        
    super(props)
    this.state= {

      albumsdescription: [], 
      albumsongsdata:[],  
      nameA:'',
      urlA:'',
      // ID: '',
     
       }
}

match =()=>{ matchPath(this.props.history.location.pathname, {
  path: '/WebFrame/AlbumInsidePage_:id',
  exact: true,
  strict: false
})
}

componentDidMount(){
  var valueArray=[];


  const requestOptions = {
    method: 'GET',
    headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',  
    'authorization': sessionStorage.getItem('token'),
    'Accept': 'application/json'},
    }
  
    fetch('http://1.2.3.4.5.6/api/likedAlbums',requestOptions)
    
    .then(res => res.json())
    .then(function(res) {
        res.forEach(element => {
            valueArray.push(element);
            // console.log("fetch this")
  });
  })

.then( this.setState({albumsdescription:valueArray}))
.then(()=>this.setState({nameA:this.state.albumsdescription[this.props.match.params.id].name}))
.then(()=>this.setState({urlA:this.state.albumsdescription[this.props.match.params.id].url}))
.then(()=>this.fetching(this.state.albumsdescription))


}

fetching=(value)=>{

  const requestOptions = {
      method: 'GET',
      headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',  
      'authorization': sessionStorage.getItem('token'),
      'Accept': 'application/json'},
      }

  fetch(`http://1.2.3.4.5.6/api/album/${value[this.props.match.params.id]._id}`,requestOptions)
  .then(response=>response.json())
  .then(songs=>{
      this.setState({albumsongsdata:songs});
      console.log("fetch that")
  });

}





toggle=(event)=>{

    var x= document.getElementById("play")
    x.style.display="block"
    var y=document.getElementById("music")
    y.style.display="none"
}
revert=()=>{
    var x= document.getElementById("music")
    x.style.display="block"
    var y=document.getElementById("play")
    y.style.display="none"
}




    render(){

      if(this.state.albumsdescription.length===0 || this.state.albumsongsdata.length===0){

        return(
          <div className="load4 pt4">
              <p><p className="loader4 mr3 tc"></p>
              <h3 >loading, please wait..</h3></p>
          </div>)
  
      }
      else{

    return(

      

      <div className="content1 vh-100 dt w-100">
        <div className="div-block-15">
          <div className="w-layout-grid grid">

                      <AlbumInsideSec1 

                    //   key= {albumsdata[ this.props.match.params.ID].id}
                    //   ID={albumsdata[ this.props.match.params.ID].id}
                    //  url={albumsdata[ this.props.match.params.ID].url}
                    //   name={albumsdata[ this.props.match.params.ID].name}
                    nameA={this.state.nameA}
                    urlA={this.state.urlA}
                 
                    

                      ></AlbumInsideSec1>

                   <div className="div-block-6 pt5 pr3">

                          <AlbumSongslist  albumsongsdata={this.state.albumsongsdata}></AlbumSongslist>

                  </div>

          </div>
       </div> 
     </div>
     
    )
  
      }
  }
};
export default AlbumInsidePage;