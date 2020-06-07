import React from 'react'
import './SearchBox.css';
import {div,input} from 'react-bootstrap'

const SearchBox = () =>{

    return(
        <div className="front-search front-box">
            <div className="container">
                <div className="row">
                    <div class="text-center " >
                            <h1>How can we help you?</h1>
                            <div class="mt0">
                                <div class="search-box">
                                    <input type="text" class="form-control" id="search" placeholder="Search" autocomplete="off"/>
                                </div>         
                            </div>
                    </div>
                </div>
            </div>
        </div>



    );
}
export default SearchBox;