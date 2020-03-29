import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostPage = (props) => {

    const { id } = useParams();

    const post = props.posts.filter(post => post.id = id)[0];
    console.log(post);
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps)(PostPage);