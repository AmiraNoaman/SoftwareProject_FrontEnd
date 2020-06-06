import React, { Component } from 'react';
import '../Components/SignUp.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import LoginSignupHeader from '../Components/LoginSignupHeader'
import SignFacebook from '../Components/SignFacebook'
import SignUpForm from '../Components/SignUpForm'
import SignUpFooter from '../Components/SignUpFooter'
import { BrowserRouter, Route, Link } from 'react-router-dom';

class SignUp extends Component {

    render(){ 
        return (
            <div >
                <LoginSignupHeader></LoginSignupHeader>
                <br></br>
                <div className="SignUp_container" >
                    <div class="row" >
                        <SignFacebook></SignFacebook>
                    </div>
                    <br></br>
                    <div class="row">
                        <h6 className="SignUp_h6" ><span className="SignUp_h6_span">OR</span></h6>
                    </div>
                    <div class="row" className='tc' >
                        <h3 className="SignUp_h3" >Sign up with your email address</h3>
                    </div>
                    <br></br>
                    <SignUpForm></SignUpForm>
                    <br></br>
                    {/* <SignUpFooter></SignUpFooter> */}
                </div> 
            </div>
        );
   }
}
export default SignUp;