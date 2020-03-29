import React, { useEffect } from 'react';
import Posts from '../components/Posts';
import { useDispatch, useSelector } from 'react-redux';
import './PostPage.css';
import { fetchPosts } from '../actions/fetchPosts';

export const PostsPage = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    return (
        <div className='content'>
            <Posts posts={posts}/>
        </div>
    );

}