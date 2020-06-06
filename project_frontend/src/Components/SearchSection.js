import React from 'react';
import './SearchSection.css'

import { SectionCardTypes } from './SearchSectionCardTypes'
import { playlistsdata } from './playlistsdata';
import SectionCardList from '../Components/SearchSectionCardList';
const Section = ({ name,title,playlist }) => {
    return (
        <div className={name}>
            <h2 className="fw7 pt6 f1-ns  lh-solid white">{name}</h2>

        <div id="SearchSection ">
            <div id="seeAllSearch">
                <a className="LSearch" href="#"><h1 className="  fw7  f3 pl2 white" >{title}</h1></a>
                </div>
                <a className="LSearch" href="#">See all</a>
            
            <SectionCardList SectionCardTypes={playlist} />
        </div>
        </div>
    );
}
export default Section;