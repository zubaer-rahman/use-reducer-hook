import React, { useReducer, useRef } from 'react';
import { PatientReducer, patientState } from '../../reducers/PatientReducer/PatientReducer';


const PatientManagement = () => {
    const [state, dispatch] = useReducer(PatientReducer, patientState);
    const nameRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(nameRef.current.value){
            dispatch({
                type: 'ADD_PATIENT',
                name: nameRef.current.value,
                id: state.patients.length,
            })
        }
        nameRef.current.value = '';
     }
    return (
        <div>
            <h1> Patient Management: {state.patients.length} </h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.patients.map(pt => <li 
                    key={pt.id} 
                    onClick={()=> dispatch({
                        type:'REMOVE_PATIENT', id: pt.id}
                        )}> 
                    {pt.name} 
                </li>)
            }
        </div>
    );
};

export default PatientManagement;