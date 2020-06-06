import React, {Component} from 'react';
import { HomeSectionTypes } from '../Components/HomeSectionTypes';
import SectionList from '../Components/WebPlayerHomeSectionList';
import './WebPlayerHome.css';

class WebPlayerHome extends Component{
    constructor(){
        super()
        this.state={
            types: [],
            loaded:false
        }
    }
    componentDidMount(){
        console.log(sessionStorage.getItem('token'))
        const requestOptions = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',  
            'Accept': 'application/json',
            'authorization' : sessionStorage.getItem('token')}
        };
        fetch('http://1.2.3.4.5.6/api/home', requestOptions)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then((users)=>{
            this.setState({types:users, loaded:true})
            console.log(users)
           
        });
        
    }
    render(){
        if(this.state.loaded == false){
            return(
            <div className="load">
                <p><p className="loader mr3 tc"></p>
                <h1 className="loading-h1">loading</h1></p>
            </div>)
        }
        return(
            <div className='home-content pt5' > 
                <SectionList SectionTypes={this.state.types}/>
            </div>
        )
    }
}

export default WebPlayerHome;