import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import { Modal } from '../components/Modal';

export const PostFormPage = () => {

    const [modalOpened, setModal] = useState(false);

    const toggleModal = () => { setModal(!modalOpened) }


    

    return (
        <div className="container mt-5">
            <button className="btn btn-primary" onClick={toggleModal}>Create Post</button>
            {modalOpened && <Modal><PostForm toggleModal={() => toggleModal()} /></Modal>}
        </div>
    );
}