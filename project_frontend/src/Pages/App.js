import React, { Component } from 'react';
import './App.css';
import Premium from '../Containers/Premium'
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
import Help from '../Containers/Help'
import Download from '../Containers/Download'
import HomePage from '../Containers/HomePage'
import Login from '../Containers/Login'
import SignUp from '../Containers/SignUp'
import WebFrame from '../Containers/WebFrame';
import ForgetPassword from '../Containers/ForgetPassword'
// import Albums from '../Containers/Albums'
// import Playlist from '../Containers/Playlist.js';

class App extends Component{
    constructor(){
        super()
    }
  render(){
      return(
        <Router>
            <Switch>
                <Route  path='/Help'>
                    <Help></Help>
                </Route>
                <Route  path='/Premium'>
                    <Premium></Premium>
                </Route>
                {/* <Route exact path='/'>
                    <Premium></Premium>
                </Route> */}
                <Route  path='/Download'>
                    <Download></Download>
                </Route>
                <Route  path='/SignUp'>
                   <SignUp></SignUp>
                </Route>
                <Route  path='/Login'>
                    <Login></Login>
                </Route>
                <Route exact path='/'>
                    <HomePage></HomePage>
                </Route>
                <Route  path='/HomePage'>
                    <HomePage></HomePage>
                </Route>
                <Route path='/WebFrame'>
                    <WebFrame></WebFrame>
                </Route>
                <Route path='/ForgotPassword'>
                    <ForgetPassword></ForgetPassword>
                </Route>
            </Switch>    
        </Router>
      )
  }
}

export default App;

