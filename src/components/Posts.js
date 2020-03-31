import React from 'react';
import Post from './Post';

export const Posts = (props) => {
    return props.posts.map(post => <Post key={post.id} post={post}/>);
}