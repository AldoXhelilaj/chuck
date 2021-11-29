//reducer
const initialState = [{

    categories: [],

    jokes:{}
}]
const categories = (state = initialState, action) => {

    switch (action.type) {
        case 'LOAD':
            return {
                ...state,
                    categories: action.payload.map((category) => {
                        return { value: category, label: category };
                    })

            }

            case 'JOKES':
                return {
                    ...state,
                        jokes:[action.payload]
                    
                }


        default:
            return state;

    }

}
export default categories;