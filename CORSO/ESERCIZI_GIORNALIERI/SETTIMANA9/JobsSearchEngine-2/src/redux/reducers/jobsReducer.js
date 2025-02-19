import { IS_LOADING_OFF, IS_LOADING_ON, SET_JOBS } from "../actions";

const initialState = {
  content: [],
  isLoading: false
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        content: action.payload
      };
    case IS_LOADING_ON:
      return {
        ...state,
        isLoading: true
      };
    case IS_LOADING_OFF:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};

export default jobsReducer;
