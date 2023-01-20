//creating action for favorite items

export const MarkFav = (fav)=>{
    return (dispatch)=>{
        dispatch({
        type:'favourite',
        payload: fav
    })
    }
}

export const MarkRead = (read)=>{
    return (dispatch)=>{
        dispatch({
        type:'clicked',
        payload: read
    })
    }
}
