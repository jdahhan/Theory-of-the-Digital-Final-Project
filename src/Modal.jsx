import './App.css';
import React from 'react';

const text = "peepeepoopoo"

const Modal = ({setModal}) => {
    const handleClick = () => {setModal(false)}
    return(
        <div className='modal'>
            {text}
            <button className='exit' onClick={handleClick}>X</button>
        </div>
    );
}
export default Modal