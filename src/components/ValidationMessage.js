import React from 'react';

export function ValidationMessage({ message }) {

    if(!message){
        return null;
    }

    return (
        <div class="alert alert-danger" role="alert">
            {message}    
        </div>
    );
} 