import React, { useState } from 'react';
import { generate } from 'shortid';
import { createPost } from '../actions/createPost';
import { connect } from 'react-redux';
import './Modal.css'

const PostForm = ({toggleModal, createPost}) => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState({});

    const submitForm = (e) => {
        e.preventDefault();
        if(!validate()) {
            return;
        }
        const newPost = {title, body};
        createPost(newPost);
        localStorage.setItem(generate(), JSON.stringify(newPost));
        toggleModal();
    }

    function validate() {
        let errors = {};
        const empty = 'This field shouldn\'t be empty!'
        if(!title) {
            errors.title = empty
        }

        if(!body) {
            errors.body = empty
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function getErrors() {
        return  <div class="alert alert-danger" role="alert">
                    {Object.values(errors).join('\n')}    
                </div>
    }
    
    return (
        <div className="modal">
            <form className="modal-content animate">
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="input-email">Title</label>
                        <input 
                            type="email"
                            className="form-control"
                            id="input-email"
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {
                            Object.keys(errors).length && getErrors()
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-group">Body</label>
                        <textarea 
                            className="form-control"
                            id="input-body"
                            value={body} 
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <p className="error-text">
                            Error text
                        </p>
                    </div>
                    <button className="btn btn-primary m-1" type="submit" onClick={(e) => submitForm(e)}>
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createPost
}


export default connect(null, mapDispatchToProps)(PostForm);