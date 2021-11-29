//reducer

const initialState= {
    isLogged:true
}
const isLogged = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGOUT': 
            return{
                ...state,
                isLogged: !state.isLogged
            } 

        default:
            return state;

    }

}
export default isLogged;