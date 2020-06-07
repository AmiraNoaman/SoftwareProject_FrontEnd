import React, {Component} from 'react';
// import { Artists } from '../Components/Artists';
import CardList from '../Components/FavouriteArtistCardList';
import './FirstWebHome.css';
import {connect} from 'react-redux'
import {Link , Redirect} from 'react-router-dom'
const MapStateToProps = (state) =>{
    return {
        Artists: state.recommend.artists,
    }
}

const MapDispatchToProps = (dispatch) =>{
    return{
        execute: ()=> dispatch()
    }
}
class FirstWebHome extends Component{
    constructor(props){
        super(props)
        this.state={
           list:[],
           Submitted:false
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    // handleClick(){
    //     this.setState({
    //       button:!this.state.button
    //     })
    //   }
    componentDidMount(){
        console.log(sessionStorage.getItem('token'))
        const requestOptions = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',  
            'Accept': 'application/json',
            'authorization' : sessionStorage.getItem('token')}
        };
        fetch('http://1.2.3.4.5.6/api/select/artists', requestOptions)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then((users)=>{
            this.setState({list:users.Artists})
            console.log(users)
        });
    }
    SubmitArtists(){
        console.log('func called')
        console.log("the artists ids are",this.props.Artists)
        const requestOptions = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',  
            'Accept': 'application/json',
            'authorization' : sessionStorage.getItem('token'),
            body: new URLSearchParams({
                'likedArtists':this.props.Artists,
                })
        }
        };
        fetch('http://1.2.3.4.5.6/api/select/artists', requestOptions)
        this.setState({Submitted:true})
        // .then(response => {
        //     console.log(response)
        //     return response.json()
        // })
        // .then((users)=>{
        //     this.setState({list:users.Artists})
        //     console.log(users)
        // });
    }
    render(){
        if(this.state.Submitted){return<Redirect to='../WebFrame/Home'></Redirect>}
        return(
            <div className='first-home tc'> 
                <h1 className='first-h1'> Choose 3 or more artists you like. </h1>
                <button onClick={()=>this.SubmitArtists()} className='btn btn-succes mb4'>Submit</button>
                <CardList list={this.state.list}></CardList>

                {/* <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>
                    
                </button> */}
                
            </div>
        )
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(FirstWebHome)