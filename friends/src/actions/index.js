import axios from 'axios';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';



export const fetchFriends = () => dispatch => {
    dispatch({ type: START });
    axios.get('http://localhost:5000/api/friends')
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }))

}