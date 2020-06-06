import React, {Component} from 'react';
import CardList from './MoodCardList';
import '../Components/WebPlayerHome.css';

const WebPlayerHomeSection = ({title,des,type}) =>{
    return(
        <div className='web-home'>
            <h1 className='web-h1 pl3'><a className="web-a">{title}</a></h1>
            <h4 className='web-h4 pl3'>{des}
                <a className="web-seeAll">SEE ALL</a>
            </h4>
            <CardList Mood={type}/>
        </div>
    )
}

export default WebPlayerHomeSection;