import React from 'react';
import './Modal.css'


export const Modal = (props) => {
    return (
        <div className="modal">
            {props.children}
        </div>
    );
}