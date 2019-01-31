import axios from 'axios';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';



export const fetchFriends = () => dispatch => {
    dispatch({ type: START });
    axios.get('/api/friends')
    .then(res => dispatch({ type: SUCCESS, payload: res.data.results }))
    .catch(err => dispatch({ type: FAILURE, payload: err }))

}