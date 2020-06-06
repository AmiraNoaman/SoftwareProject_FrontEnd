import React, { Component } from 'react';
import './SignUp.css';

class SignFacebook extends Component{
    render(){
        return(
            <div className='tc' >            
                    <a href="https://en-gb.facebook.com/login.php"  className="SignUp_button SignUp_button_facebook">
                        SIGN UP WITH FACEBOOK
                    </a>
            </div>
        );
    }
}
export default SignFacebook;