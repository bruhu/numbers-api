// Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

// import the actions we defined
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";

// define an initial state
const initialState = {
  fetching: false,
  data: null,
  error: null
};

// the reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    default:
      return state;
  }
}