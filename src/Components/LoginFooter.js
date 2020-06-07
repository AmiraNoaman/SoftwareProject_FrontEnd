import React, { Component } from 'react';
import './Login.css';
import {Link , Redirect} from 'react-router-dom'
class LoginFooter extends Component{
    render(){
        return(
            <div className='text-center' className="Login_container" >
                <div class="row" className='text-center'>
                        <h4 className="Login_h4" >Don't have an account?</h4>
                </div>
                <br></br>
                <Link to="/SignUp">
                <div class="row">
                    <button class="Login_button_signup">SIGN UP FOR SPOTIFY</button>
                </div>
                </Link>
                <br></br>
                <div class="row">
                    <hr className="Login_hr" /> 
                </div>
                <br></br>
                <div class="row">
                    <p className="Login_p" >
                        If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's
                        <a className="Login_p_a " href="https://www.spotify.com/eg-en/legal/end-user-agreement/plain/" target="_blank"> Terms & Conditions  </a>
                        and
                        <a className="Login_p_a " href="https://www.spotify.com/eg-en/legal/privacy-policy/plain/" target="_blank"> Privacy Policy</a>.
                    </p>
                </div>
            </div>
        );
    }
}
export default LoginFooter;