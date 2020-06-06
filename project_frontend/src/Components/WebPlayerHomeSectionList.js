import React, {Component} from 'react';
import Section from '../Components/WebPlayerHomeSection';
// import '../Components/WebPlayerHome.css';
import {useDispatch,useSelector} from 'react-redux'

const WebPlayerHomeSectionList = ({SectionTypes}) =>{
    // Dispatch(LoadSongs({id:'1',url:'1',name:'1',artist:'1'}))

    return (
        <div>
            {
                SectionTypes.map((user,i) =>{
                    return(
                        <Section 
                            key={i}
                            // id={SectionTypes[i].id}
                            title={SectionTypes[i].title}
                            // des={SectionTypes[i].des}
                            type={SectionTypes[i].data}
                        />
                    );
                })
            }
        </div>
    )
}
export default  WebPlayerHomeSectionList;