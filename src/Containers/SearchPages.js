import React, { Component } from 'react';
import { RouteComponentProps, matchPath } from 'react-router';
// import './SearchPages.css'
import Section from '../Components/SearchSection'
import {types} from '../Components/Searchtypes'
import { match } from "react-router-dom";
import { playlistsdata } from '../Components/playlistsdata';

class Pages extends Component{
    constructor(){
        super();
        this.state={
        types:[],
        specificCard:[],
        name:'',
        id:""
        }
    
      }
     match =()=>{ matchPath(this.props.history.location.pathname, {
          path: '/WebFrame/Page_:id',
          exact: true,
          strict: false
        })
    }
    componentWillMount () {
        var valueArray = [];
        const requestOptions = {
            method: 'GET',
            headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',  
            'authorization': sessionStorage.getItem('token'),
            'Accept': 'application/json'},
            }
        fetch('http://1.2.3.4.5.6/api/browse ',requestOptions)
        .then(res => res.json())
        .then(function(res) {
            res.forEach(element => {
                valueArray.push(element);
      });
    })
   
    .then( this.setState({types:valueArray}))
    .then(()=>this.setState({name:this.state.types[this.props.match.params.id].name}))
    .then(()=>this.fetching(this.state.types))
  

}

    fetching=(value)=>{
        const requestOptions = {
            method: 'GET',
            headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',  
            'authorization': sessionStorage.getItem('token'),
            'Accept': 'application/json'},
            }
        fetch(`http://1.2.3.4.5.6/api/genre/${value[this.props.match.params.id]._id}`,requestOptions)
        .then(response=>response.json())
        .then(properties=> 
            this.setState({specificCard:properties.playlists}));

    }

    render(){ 
        return (
            <div >
                    <Section title="Popular Playlists" name={this.state.name} playlist={this.state.specificCard}/>
                    {/* <Section title="New Release"playlist={playlistsdata}/> */}
            </div>
            );
    }
}

    export default Pages;