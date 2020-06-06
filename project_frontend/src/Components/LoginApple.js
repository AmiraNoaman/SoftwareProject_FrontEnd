import React, { Component } from 'react';
import './Login.css';
import apple from '../Apple_Icon.png';

class LoginApple extends Component{
    render(){
        return(
            <div className="Login_container" >           
                    <a href="https://appleid.apple.com/#!&page=signin" className=" Login_button Login_button_apple">
                    <img src={apple} className="Login_apple-logo"   alt=" apple logo"  />
                        CONTINUE WITH APPLE
                    </a>
            </div>
        );
    }
}
export default LoginApple;