import React from 'react';
import { connect } from 'react-redux';
import { decrements, increments } from '../utility/actions';

// display count number 
const Counter = (props) => {
    return (
        <div>
            Counter :- {props.value}  <br/>
            <button onClick={props.increm}> + </button> <button onClick={props.decrem}> - </button>
        </div>
    );
};

//  redux connect the function 
const mapStateToProps =(state)=>{
    return {
        value: state.value
    }
}
// redux connect the function 
const mapDispatchToProps =(dispatch)=>{
    return {
        increm: ()=> dispatch(increments()),
        decrem: () => dispatch(decrements())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);