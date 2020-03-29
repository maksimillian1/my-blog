import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = (props) => {
    const keys = Object.keys(localStorage);

    console.log(props.posts);
    const getPost = key => localStorage.getItem(key);
    const parsePost = post => JSON.parse(post);

    return keys.map(key => <Post key={key} post={parsePost(getPost(key))}/>);
}

const mapStateToProps = state => {
    console.log(state.posts.posts);
    return {
        posts: state.posts.posts
    };
}


export default connect(mapStateToProps, null)(Posts);