import React, { useReducer } from 'react';
import { CountReducer, countState } from '../../reducers/CountReducer/CountReducer';
 

const CountManagement = () => {

    const[state, dispatch] = useReducer(CountReducer, countState );

    return (
        <div style={{textAlign: "center"}}>
            <h1>This is reducer count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}> Increment </button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}> Decrement </button>
        </div>
    );
};

export default CountManagement;