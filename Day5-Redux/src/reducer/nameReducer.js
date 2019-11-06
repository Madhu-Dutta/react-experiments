// //Create initial state/data for store
// const isState = {
//     name: "Maddy",
//     items: ['eat', 'sleep']
// }
// //Change the initial state based on the component state and return it to the store. 
// //Store will update the component.
// const nameReducer = (state=isState, action) => {
//     //Reflect the dispatch action here
//     console.log(action);
//     //Use SWITCH or any Conditionals to update the changed states
//         //If you find that the action type matches with a changed state, return the updated payloads
//     if(action.type === 'CHANGE_NAME'){
//         return{
//             ...state,
//             name: action.payload
//         }
//     }
//     return state;
// } 

// export default nameReducer;
//No need to create an object in combine reducers
//Change the initial state based on the component state and return it to the store. 
//Store will update the component.
// const nameReducer = (state='', action) => {
//     //Reflect the dispatch action here
//     console.log(action);
//     //Use SWITCH or any Conditionals to update the changed states
//         //If you find that the action type matches with a changed state, return the updated payloads
//     if(action.type === 'CHANGE_NAME'){
//         return{
//             ...state,
//             name: action.payload
//         }
//     }
//     return state;
// } 
const nameReducer = (state='', action) => {
    //Reflect the dispatch action here
    console.log(action);
    //Use SWITCH or any Conditionals to update the changed states
        //If you find that the action type matches with a changed state, return the updated payloads
    if(action.type === 'CHANGE_NAME'){
        return action.payload
    }
    return state;
} 

export default nameReducer;