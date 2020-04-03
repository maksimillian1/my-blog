import React, { useState } from 'react';
import { generate } from 'shortid';
import { createPost } from '../actions/createPost';
import { connect } from 'react-redux';
import { ValidationMessage } from './ValidationMessage'; 


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

    return (
        <form className="modal-content pt-3 pb-3">
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
                    <ValidationMessage message={errors.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="form-group">Body</label>
                    <textarea 
                        className="form-control"
                        id="input-body"
                        value={body} 
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <ValidationMessage message={errors.body}/>
                </div>

                <button className="btn btn-primary m-1" type="submit" onClick={(e) => submitForm(e)}>Create</button>
                <button type="button" class="btn btn-secondary" onClick={toggleModal}>Close</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = {
    createPost
}


export default connect(null, mapDispatchToProps)(PostForm);