import React,{useState} from 'react'
import './FavouriteArtist.css';
import {useSelector,useDispatch} from 'react-redux'
import {RecommendArtist} from '../Redux/Recommend/RecommendAction'
const FavouriteArtistCard=({id,image,name})=>{
    const dispatch=useDispatch()
    const [clicked,setclicked] = useState(false)
    if(clicked){
        dispatch(RecommendArtist([true,id]))
        console.log("button clicked")
        return(
        <button className='unstyled-button clicked '  onClick={()=>dispatch(RecommendArtist([false,id]))} >
            <div onClick={()=>setclicked(!clicked)} className='card-design'>
                <img className='card-img' src={`${image}`}></img>
                <h3  className='card-h3' >{name}</h3>
            </div>
        </button>
        )
    }
    console.log("button unclicked")
    return(
        
        <button  className='unstyled-button' onClick={()=>setclicked(!clicked)} >
            <div className='card-design'>
                <img className='card-img' src={`${image}`}></img>
                <h3  className='card-h3' >{name}</h3>
            </div>
        </button>
    )
}

export default FavouriteArtistCard