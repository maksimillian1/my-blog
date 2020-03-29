import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = (props) => {
    return props.posts.map(post => <Post key={post.id} post={post}/>);
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    };
}


export default connect(mapStateToProps, null)(Posts);