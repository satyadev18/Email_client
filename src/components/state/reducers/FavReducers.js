//const state = [1,2,3]

const FavReducer = (state = [], action) => {

    if (action.type === 'favourite') {
        return [ action.payload,...state]
    }

    else
        return state

}

export default FavReducer