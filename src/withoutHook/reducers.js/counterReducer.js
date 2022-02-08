import { DECREMENT_COUNT, INCREMENT_COUNT } from "../utility/actionsConstant";

const initialState ={
    value:0
};

const counterReducer =(state = initialState, action)=>{
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state, 
                value: state.value+1
            }
        case DECREMENT_COUNT:
            return {
                ...state, 
                value: state.value - 1
            }
        default:
            return state;
    }
};

export { counterReducer };
