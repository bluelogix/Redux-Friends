import axios from 'axios';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const ADD_FRIENDS = 'ADD_FRIEND';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const DELETE_FRIENDS = 'DELETE_FRIENDS';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';


export const fetchFriends = () => dispatch => {
    dispatch({ type: START });
    axios.get('http://localhost:5000/api/friends')
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }))

}

export const addFriends = friend => dispatch => {
    dispatch({ type: ADD_FRIENDS });
    axios.post('http://localhost:5000/api/friends', friend ) //something in the comma 
    .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FAILURE, payload: err }))

}

export const deleteFriend = id => dispatch => {
       dispatch({ type: DELETE_FRIENDS });
       axios.delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => dispatch({ type: DELETE_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }))
  };
  