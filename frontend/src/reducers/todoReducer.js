import {
  TODO_FAIL,
  TODO_REQUEST,
  TODO_SUCCESS,
} from "../constants/todoConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO_REQUEST:
      return { loading: true };
    case TODO_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case TODO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
