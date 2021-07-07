import 
{ START,
  SUCCESS,
  FAILURE,
  ADD_FRIENDS,
  ADD_SUCCESS,
  ADD_FAILURE, 
  DELETE_FRIENDS, 
  DELETE_SUCCESS,
  DELETE_FAILURE}       
from '../actions';

const initialState = {
  fetchingFriends: false,
  addingFriends: false,
  deleteFriends: false,
//   friendsSaved: false,
//   savingFriends: false,
//   updatingFriend: false,
//   friendUpdated: false,
//   deletingFriend: false,
//   friendDeleted: false,
  friends: [],
  error: null
}


 const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case START:
          return {
            ...state,
              // error: '',
              fetchingFriends: true
          };
          case SUCCESS:
            return {
              ...state,
              friends: action.payload,
              fetchingFriends: false,
              // error: null
            };
          case FAILURE:
              return {
                ...state,
                error: action.payload,
                fetchingFriends: false
              }
        case ADD_FRIENDS:
              return {
                  ...state,
                  fetchingFriends: true
              }
        case ADD_SUCCESS:
              return {
                  ...state,
                  fetchingFriends: false,
                  error: null,
                  friends: action.payload
                
              }
              case ADD_FAILURE:
              return {
                ...state,
                error: action.payload,
                fetchingFriends: false
              }
              case DELETE_FRIENDS:
              return {
                  ...state,
                  deleteFriends: true,
                //   fetchingFriends: true, //might change
              }
              case DELETE_SUCCESS:
              return {
                  ...state,
                  fetchingFriends: false,
                  error: null,
                  friends: action.payload
                
              }
              case DELETE_FAILURE:
              return {
                ...state,
                error: action.payload,
                fetchingFriends: false
              }


      default:
        return state;
    }
  };

  export default friendReducer;

