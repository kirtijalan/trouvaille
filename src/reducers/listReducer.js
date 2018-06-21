import initialState from './initialState';
import { FETCH_LIST, RECEIVE_LIST } from '../actions/actionTypes';

export default function list(state = initialState.list, action){
    let newState;
    switch (action.type) {
        case FETCH_LIST:
            console.log('FETCH_LIST Action')
            return action;
        case RECEIVE_LIST:
            newState = action.list;
            console.log('RECEIVE_LIST Action')
            return newState;
        default:
            return state;
    }
}