import React from 'react';

export default ({post}) => {
    const {title, body} = post;
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="title">{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
}