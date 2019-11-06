// export const anotherName = (name) => {
//     return{
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }
// export const anotherName = () => {
//     return(dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         //Get the actual json data object
//         .then(res=>res.json())
//         //Returns the promise as a response / result
//         .then(result => {
//             dispatch({
//                 type: 'CHANGE_NAME',
//                 payload: result[4].name
//             })
//         })
//     }
// }
export const anotherName = () => {
    return async (dispatch) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        //Get the actual json data object
        const result = await data.json()
        //Returns the promise as a response / result
        dispatch({
            type: 'CHANGE_NAME',
            payload: result[4].name
        })    
    }
}
export const addItems = () => {
    return{
        type: 'ADD_ITEMS',
        payload: 'code'  
    }
}