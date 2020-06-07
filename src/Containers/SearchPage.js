import React, { Component }  from 'react';
// import logo from './logo.svg';
import './SearchPage.css';
import CardList from '../Components/SearchCardlist'
import {types} from '../Components/Searchtypes'
import Card from '../Components/SearchCard'

class SearchPage extends Component{
  constructor(){
    super();
    this.state={
      types:[],
      clickid:"7",
      topcardname:'',
      id:''
    }

  }

  componentWillMount(){
    var valueArray = [];
    const requestOptions = {
      method: 'GET',
      headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',  
      'authorization': sessionStorage.getItem('token'),
      'Accept': 'application/json'},
      }
    fetch('http://1.2.3.4.5.6/api/browse ',requestOptions)
    .then(response=>response.json())
    .then(function(res) {
      res.forEach(element => {
          valueArray.push(element);
});
})

.then( this.setState({types:valueArray}))
.then(()=>this.setState({topcardname:this.state.types[7].name}))
.then(()=>this.setState({id:"7"}))
 
  }

  render(){
    return(
      <div className="vh-100 dt w-100 pl2">
        <h1 className="pl4 fw7 pt4 f3 lh-title white  ">Your top genres</h1>
         <div >
          <Card idc={this.state.id}
            title={this.topcardname}
            bg={this.topcardname}
            />
           </div>
        <h1 className=" pl4 fw7 pt4 f3 lh-title white ">Browse all</h1>
        <CardList list={this.state.types} EVENT={this.ondivclick}/>
        
    </div>

    )
  }

}

export default SearchPage;
