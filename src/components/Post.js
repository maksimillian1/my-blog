import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({post}) => {
    const {title, body} = post;
    const url = `/post/${post.id}`;
    return (
        <div className="card h-100">
            <div className="card-body">
                <h4 className="card-title"><NavLink to={url}>{title}</NavLink></h4>
                <p className="card-text">{body}</p>
            </div>
        </div>
    );
}