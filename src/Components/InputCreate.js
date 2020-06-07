import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal';
import './InputCreate.css';
import HeartIcon from "./HeartIcon"
import ReactDOM from 'react-dom';
var check
const $ = window.$;

 class InputCreate extends Component{
    constructor(props){
    super(props)
    this.state={
        data:[],
        checked:true,
        MockBack: false,
        LoggedIn: false
    }}
    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state.data)
    }

    onSubmit(e) {
       
        console.log( this.refs.ayhaga.value);
        console.log(sessionStorage.getItem('token'))
        // etc
        const requestOptions = {
            method: 'POST',
            headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',  
            'Accept': 'application/json',
            'authorization':sessionStorage.getItem('token'),},
            body: new URLSearchParams({
            'name':this.refs.ayhaga.value,
        
                })
        };
        console.log(requestOptions.body)
                fetch('http://1.2.3.4.5.6/api/createPlaylist', requestOptions)
                .then(console.log("fetching successfuly"))
                .then(response => {
                    return response.json()
                    console.log(response)
                })
        
    }
     Close(){

        document.getElementById('mod').style.display="none";
        var all = document.getElementsByClassName('modal-backdrop');
        for (var i = 0; i < all.length; i++) {
          all[i].style.display = 'none';
          
        }
        
    
        console.log("aybtngan")
    }

      
   // componentDidMount(){

//const requestOptions={

  //  body:{
    //    'name':
    //}
//}

  //  }
 render(){
    return(
        
        <div>
          <div className="create-playlist active" id="popup">
        <div class="new-playlist" id='Container' >
         <div className="Close" >
        
        <button className="close-icon" type="button"  onClick={this.Close.bind(this)}>
        
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fill-rule="evenodd">

        </path></svg></button>
        
        </div>
        <h1 className="heading-48">Create a new playlist</h1><div className="div-block-16">
        <div className="_7c0399398b8b07b1b1fa6764a3ed59b1-scss" id="text-box">
        <div className="inputBox"><div class="contentSpacing">
        <h4 className="inputBox-label">Playlist Name</h4>
        <input type="text" className="inputBox-input" id='input-holder' placeholder="New Playlist" name="newplaylist" ref="ayhaga" />
        
        </div></div></div></div>
        <div className="button-container">
           <div className="cancel-button">
           <button className="Cancel" type="button" onClick={this.Close.bind(this)} >CANCEL</button>
           </div>
           <div className="create-button">
           <button className="create" type="button" onClick={this.onSubmit.bind(this)}>CREATE</button>
           </div>
           </div>
        </div></div></div>
        
          
     
    )
 };
 }
export default InputCreate;