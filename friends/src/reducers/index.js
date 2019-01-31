import 
{ START,
  SUCCESS,
  FAILURE }  
from '../actions';

const initialState = {
  fetchingFriends: false,
//   friendsFetched: false,
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
      default:
        return state;
    }
  };

  export default friendReducer;

