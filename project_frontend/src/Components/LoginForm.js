import React, { Component } from 'react';
import './Login.css';
import {Link , Redirect} from 'react-router-dom'
class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            email:'',
            password:'',
            emailError: "",
            passwordError: "",
            checked:true,
            MockBack: false,
            LoggedIn: false
        }
        this.SubmitForm = this.SubmitForm.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    onLoginChange=(event)=>{
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state.data)
    }
    validate = () => {
        let eError='';
        let pError='';
        if (!this.state.email) {
            eError='Please enter your username or email address.';
        }
        if (!this.state.password){
            pError='Please enter your password.'; 
        }
        if(this.state.password.length < 8 && this.state.password.length >= 1 ){
            pError= 'The Password is too short.';
        }
        if(eError || pError){
            this.setState({emailError: eError, passwordError:pError});
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
        this.setState({passwordError:''});
        }
        else{
            console.log('Invalid Form');
        }
        const {email , password, MockBack,data} = this.state
        // let found = data[0].email
        if (email == 'found' && password == "admin" && MockBack ){
            this.setState({LoggedIn: true})
            sessionStorage.setItem("token","asdfjfskfbsfgyfewjsfdk")
        }
        else if (!MockBack){
            const requestOptions = {
                method: 'POST',
                headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',  
                'Accept': 'application/json'},
                body: new URLSearchParams({
                    'email':email,
                    'password':password})
            };
            console.log(requestOptions.body)
            fetch('http://1.2.3.4.5.6/api/login', requestOptions)
            .then(console.log("fetching successfuly"))
            .then(response => {
                return response.json()
                console.log(response)
            })
            .then((token)=>{
                sessionStorage.setItem('token','bearer '+token)
                this.setState({LoggedIn:true})
            })
        }
    let token = sessionStorage.getItem('token')
    console.log(token)
    }
    componentDidMount(){
        if(this.state.MockBack){
        fetch('http://1.2.3.4.5.6/api/song/5e8c31dc3d162e0ea00780f3')   

        .then(response=> {

            return response.json();
        })
        .then(users => {

            this.setState({  data: users })
        })
        }
    
    }
    render(){
        const {data}=this.state
        if (this.state.LoggedIn == true){
            // console.log("logged")
            return <Redirect to='/WebFrame/FirstWebHome'></Redirect>
        }
        return(
            <div className="Login_container">            
                <form onSubmit={this.SubmitForm} className='tl'>
                    <div class="row">
                        <input
                            className='Login_inText'
                            type="text"
                            name='email'
                            placeholder='Email address or username'
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onLoginChange}
                        />
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
                    </div>
                    <br></br>
                    <div class="row">
                        <input
                            className="Login_input"
                            type="password"
                            name='password'
                            placeholder='Password'
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onLoginChange}
                        />
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError}
                    </div>
                    <br></br>
                    <div class="row" class="form-check" >
                        <input 
                            type="checkbox" 
                            className="Login_input_check" 
                            name='checked'
                            value={this.state.checked}
                            onChange={event=>this.onLoginChange(event)}
                        />
                        <label className='Login_rememberme' > Remember me </label>
                        <button type='submit' className="Login_button Login_button_login">LOG IN</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default LoginForm;