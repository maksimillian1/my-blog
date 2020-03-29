import { CREATE_POST, FETCH_POSTS } from "../actionTypes";

const initState = {
    posts: []
}

export const postsReducer = (state=initState, action) => {
    switch(action.type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat(action.payload) };
        case FETCH_POSTS:
            return { ...state, fetchedPosts: action.payload }
        default:
            return state;
    }
}