import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/fetchPosts';
import { Posts } from '../components/Posts';
import './PostPage.css';


export const PostsPage = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts).posts;

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    return (
        <div className='content mt-3'>
            <Posts posts={posts}/>
        </div>
    );

}