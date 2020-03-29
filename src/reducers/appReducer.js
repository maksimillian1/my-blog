import { SHOW_LOADER, HIDE_LOADER } from "../actionTypes";

const initState = {
    loading: false
}

export const appReducer = (state = initState, action) => {
    switch(action){
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        default:
            return state;
    }
}