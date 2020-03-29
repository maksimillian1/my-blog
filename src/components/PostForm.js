import React, { useState } from 'react';
import { generate } from 'shortid';
import { createPost } from '../actions/createPost';
import { connect } from 'react-redux';
import './Modal.css'

const PostForm = ({toggleModal, createPost}) => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const submitForm = (e) => {
        e.preventDefault();
        const newPost = {title, body};
        createPost(newPost);
        localStorage.setItem(generate(), JSON.stringify(newPost));
        toggleModal();
    }
    
    return (
        <div className="modal">
            
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <textarea 
                        className="form-control"
                        value={body} 
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <button className="btn btn-primary" type="submit" onClick={(e) => submitForm(e)}>
                    Create
                </button>
            </form>

        </div>
    )
}

const mapDispatchToProps = {
    createPost
}


export default connect(null, mapDispatchToProps)(PostForm);