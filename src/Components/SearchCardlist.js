import React from 'react';
import Card from './SearchCard';
import {types} from '../Components/Searchtypes'

const CardList = ({ list }) => {
        return (
        <div className=''>
            {
                
                // {cardCom}
                list.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            idc={i}
                            title={list[i].name}
                            // source={types[i].source}
                            bg={list[i].name}
                            // Path={types[i].Path}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;
