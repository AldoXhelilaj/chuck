//dispatch

// export const increment = (num=5) => {
//     return {
//         type: 'INCREMENT',
//         payload: num,
//     }
// }

// export const decrement = (num=5) => {
//     return {
//         type: 'DECREMENT',
//         payload: num
//     }
// }

// export const checkLog = () => {
//     return {
//         type: 'LOGOUT',
//     }
// }

// export const add = (payload) => {
//     return {
//         type: 'ADD',
//         payload
//     }
// }

// export const remove = (payload) => {
//     return {
//         type: 'REMOVE',
//         payload
//     }
// }
export const loadCategories = (payload) => {
    return {
        type: 'LOAD',
        payload
    }
}

export const loadJokes = (payload) => {
    return {
        type: 'JOKES',
        payload
    }
}


// export const increment = (payload)=>{
//     return {
//         type: 'INCREMENT',
//         payload
//     }
// }