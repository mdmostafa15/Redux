import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import actions to update state object
import { decrements, increments } from '../utility/actions';


// display count number 
const CounterHook = (props) => {
    // read current state from store.
    const value = useSelector((state)=>state.value);
    // update state to store 
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Counter | using react-redux Hook</h3>
            Counter :- {value}  <br/>
            <button onClick={()=>dispatch(increments())}> + </button> <button onClick={()=>dispatch(decrements())}> - </button>
        </div>
    );
};


export default CounterHook;