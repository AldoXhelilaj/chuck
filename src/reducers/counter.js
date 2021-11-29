//reducer
const initialState = {
    count: 0
}

const counter = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload
            }

        case 'DECREMENT':

            return {
                ...state,
                count: state.count - action.payload
            }

        

        default:
            return state;

    }

}
export default counter;