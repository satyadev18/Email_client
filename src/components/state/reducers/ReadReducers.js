const Readreducer = (state = [], action) => {

    if (action.type === 'clicked') {
     return [ action.payload,...state]
 }

   else
    return state;

}


export default Readreducer