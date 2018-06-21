import * as types from './actionTypes';

function url(keyword) {
    return 'http://www.omdbapi.com/?s=${keyword}&apikey=7e79b676`;'
}

export function receiveList(json){
    return{
        type: types.RECEIVE_LIST,
        res: json.res
    };
}

export function fetchList(keyword){
    return dispatch => {
        return fetch(url(keyword), {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept' : 'application/json'
            }
        })
        .then( 
            (response) => {
                response.json()
            },
            error => {
                console.log(error)
            }
        )
        .then( json => dispatch(receiveList(json)))
    }
}