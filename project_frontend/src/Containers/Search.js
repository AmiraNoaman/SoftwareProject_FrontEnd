import React from 'react';
import './Search.css'
const Search = () => {
    return (
        <div id="search">
            <div id="Top">
                <div className="item1">
                    <div>
                        <h2 className="white">Top Result</h2>
                    </div>
                </div>
                <div className="item2">
                    <div className="cardSong">
                        <div draggable="true">
                            <div className="react-contextmenu-wrapper">
                                <img alt="img"/>
                            </div>
                        </div>
                        <div>
                            <h3 className="white">esm elsong</h3>
                        </div>
                    </div>


                </div>

            </div>
          

        </div>
        );
    }
    export default Search;