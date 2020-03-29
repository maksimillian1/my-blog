import React from 'react';

export const Modal = (props) => {
    return (
        <div className="modal">
            {props.children}
        </div>
    );
}