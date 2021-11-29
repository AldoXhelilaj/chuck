//reducer
const initialState ={

    list: [{
        name: 'aldo',
        id: 1
    }]
}
const todo = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case 'REMOVE':
            return {
                ...state,
                list: state.list.filter((todo) => todo.id !== action.payload)

            }

        default:
            return state;

    }

}
export default todo;