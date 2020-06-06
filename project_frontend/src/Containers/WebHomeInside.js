import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouteComponentProps, matchPath } from 'react-router';
import './WebHomeInside.css';
import WebHomeInsideCard from '../Components/WebHomeInsideCard';
import WebHomeInsideList2 from '../Components/WebHomeInsideList2';
import {playlistsdata} from '../Components/playlistsdata';
import {connect} from 'react-redux'
import {LoadSongs} from '../Redux/songs/StreamActions'
const MapStateToProps = (state) =>{
    return {
        data: state.stream,
        
    }
}

const MapDispatchToProps = (dispatch) =>{
    return{
        LoadData: (data)=> dispatch(LoadSongs(data))
    }
}

const $ = window.$;

class WebHomeInside extends Component{
  constructor(props) {        
    super(props)
    this.state= { 
      WebHomeInsideSongs:[],
      id: ''  
    }
}

match =()=>{ matchPath(this.props.history.location.pathname, {
    path: '/WebFrame/WebHomeInside_:id',
    exact: true,
    strict: false
    })
}
componentDidMount(){
    const id =this.props.data.id
    const requestOptions = {
        method: 'GET',
        headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',  
        'authorization': sessionStorage.getItem('token'),
        'Accept': 'application/json'},
        }
    fetch('http://1.2.3.4.5.6/api/playlist/:id',requestOptions).then(response=>{
      return response.json();
    }).then(users=>{
      this.setState({WebHomeInsideSongs:users});
      console.log(users)
      this.setState({loaded:true});
    })
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
        const {WebHomeInsideSongs} =this.state
        return(
            <div className="content1">
                <div className="div-block-15">
                    <div className="w-layout-grid grid">
                        <WebHomeInsideCard 
                            // // key= {playlistsdata[ this.props.match.params.id-1].id}
                            // id={WebHomeInsideSongs[ this.props.match.params.id-1]._id}
                            // playlistimage={WebHomeInsideSongs[ this.props.match.params.id-1].url}
                            // Title={WebHomeInsideSongs[ this.props.match.params.id-1].title}
                        ></WebHomeInsideCard>
                        <div className="div-block-6 pt5 pr3">
                            <WebHomeInsideList2 WebHomeInsideData={WebHomeInsideSongs}></WebHomeInsideList2>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
};
export default connect(MapStateToProps,MapDispatchToProps)(WebHomeInside);