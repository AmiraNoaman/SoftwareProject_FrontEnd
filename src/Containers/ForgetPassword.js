import React, {Component} from 'react';
import './ForgetPassword.css'
class ForgetPassword extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            emailError: "",
            MockBack: false,
            ForgetPassword: false
        }
        this.SubmitForm = this.SubmitForm.bind(this)
    }

    onForgetPasswordChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state.email)
    }
    validate = () => {
        if (!this.state.email) {
            this.setState({emailError:'Please enter your username or email address'});
            return false;
        }
        return true;
    };
    SubmitForm(event){
        event.preventDefault()
        const isValid = this.validate();
        if (isValid) {
        console.log(this.state);
        // clear form
        this.setState({emailError:''});
        }
        else{
            console.log('Invalid Form');
        }
        const {email , MockBack, data} = this.state
        
        if (!MockBack){
            const requestOptions = {
                method: 'POST',
                headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',  
                'Accept': 'application/json'},
                body: new URLSearchParams({
                    'emailUsername':email,})
            };
            fetch('http://1.2.3.4.5.6/api/password-reset', requestOptions)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then((result)=>{
                console.log("wrong email")
            })
            
        }
    
    }
    
    render(){
        return(
            <form onSubmit={this.SubmitForm}>
            <div class='forget-container'>
                <div> 
                    <div className="pl5">
                <h1 className='forget-h1  ' >Password Reset</h1>
                </div>
                <p className='forget-p pr3 tc' >Enter your Spotify username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>
                </div> 
                <div>
                    <label className='forget-label' > Email address or username </label>
                    <input
                        className='email-input'
                        type="text"
                        name='email'
                        placeholder='Email address or username'
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onForgetPasswordChange}
                    />
                </div>
                <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.emailError}
                </div>
                <br></br>
                <div>
                    <button type='submit' className="forget-button pb2 tc ml6">SEND</button>
                    <p className='forget-p pr6 pt3 tc' >If you still need help, contact Spotify Support.</p>
                </div>
            </div> 
            </form>
        )
    }
}

export default ForgetPassword;