import React, { Component } from 'react';
import '../Components/Login.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import LoginSignupHeader from '../Components/LoginSignupHeader'
import LoginFacebook from '../Components/LoginFacebook'
import LoginApple from '../Components/LoginApple'
import LoginForm from '../Components/LoginForm'
import LoginFooter from '../Components/LoginFooter'
//import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
class Login extends Component {

    render(){ 
        return (
            <div  >
                <LoginSignupHeader></LoginSignupHeader>
                <div className="Login_container" className='text-center'>
                    <br></br>
                    <div class="row" className='text-center'>
                        <h5  className="Login_h5" >To continue, log in to Spotify.</h5>
                    </div>
                    <div class="row" >
                        <LoginFacebook></LoginFacebook>
                    </div>
                    <br></br>
                    <div class="row">
                        <LoginApple></LoginApple>
                    </div>
                    <br></br>
                    <div class="row"  className='text-center'>
                        <h6 className="Login_h6" ><span  className="Login_h6_span" >OR</span></h6>
                    </div>
                    <br></br>
                    <LoginForm></LoginForm>
                    <br></br>
                    <div class="row" className='text-center'>
                        <Link to='ForgotPassword'><a className="Login_a" href="#" >Forgot your password?</a></Link>
                    </div> 
                    <br></br>
                    <br></br>
                    <div class="row">
                        <hr className="Login_hr" /> 
                    </div>
                    <br></br>
                    <br></br>
                    <LoginFooter></LoginFooter>
                </div> 
            </div>
        );
   }
}
export default Login;