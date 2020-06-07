import React, { Component } from 'react';
import logo from '../Spotify_Icon.png';
import './Login.css';
import { Link } from 'react-router-dom'


class LoginSignupHeader extends Component{
    render(){
        return(
            <div className='text-center' class="responsive">            
                <Link to='HomePage'><h1 className="Login_h1" ><img src={logo}  className="Login-logo" alt=" spotify logo"  /> Spotify</h1></Link>
                <hr className="Login_hr_header"></hr> 
            </div>
        );
    }
}
export default LoginSignupHeader;
