import React, { Component } from 'react';
import './Login.css';
import facebook from '../Facebook_Icon.png';

class LoginFacebook extends Component{
    render(){
        return(
            <div className='tc' className="Login_container">            
                    <a href="https://en-gb.facebook.com/login.php"  className="Login_button Login_button_Facebook">
                    <img src={facebook} className="Login_facebook-logo" alt=" facebook logo"/>
                        CONTINUE WITH FACEBOOK
                    </a>
            </div>
        );
    }
}
export default LoginFacebook;