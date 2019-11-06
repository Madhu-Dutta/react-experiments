
//Change the initial state based on the component state and return it to the store. 
//Store will update the component.
const itemReducer = (state=[], action) => {
    //Reflect the dispatch action here
    console.log(action);
    //Use SWITCH or any Conditionals to update the changed states
        //If you find that the action type matches with a changed state, return the updated payloads
    if(action.type === 'ADD_ITEMS'){
        return [ ...state, action.payload]
    }
    return state;
} 

export default itemReducer;