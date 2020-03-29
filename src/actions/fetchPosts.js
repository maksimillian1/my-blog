import { FETCH_POSTS } from "../actionTypes";

export const fetchPosts = () => {
    return async dispatch => {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();
        dispatch({ type:FETCH_POSTS, payload: json });
    }
}