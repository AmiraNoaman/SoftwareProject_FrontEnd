import React from 'react';
import Card from './FavouriteArtistCard';
import './FavouriteArtist.css';
import { Artists } from '../Components/Artists';

const FavouriteArtistCardList =({list}) =>{
    return(
        <div >
            { 
                list.map((user,i) =>{
                    return (
                        <Card 
                            key={i}
                            id={list[i]._id} 
                            image={Artists[7].image}
                            name={list[i].nickname}
                        />
                    );
                })
            }
        </div>
    )
}

export default FavouriteArtistCardList