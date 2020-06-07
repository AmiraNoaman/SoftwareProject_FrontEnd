import LikeSong from '../Constants';
import LikeAlbum from '../Constants';
import LikePlaylist from '../Constants';



export const SongLike=(data)=>{
    return{
    type: LikeSong,
    payload: data
    }
}

export const AlbumLike=(data)=>{
    return{
        type: LikeAlbum,
        payload: data
    }
}

export const PlaylistLike=(data)=>{
    return{
        type: LikePlaylist,
        payload: data
    }
}