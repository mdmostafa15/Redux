import { DECREMENT_COUNT, INCREMENT_COUNT } from "./actionsConstant";

const increments =()=>{
    return {
        type: INCREMENT_COUNT
    }
};
const decrements = () =>{
    return {
        type: DECREMENT_COUNT
    }
};

export { increments, decrements };
