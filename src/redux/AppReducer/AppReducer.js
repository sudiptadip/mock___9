import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes";


const Data = {
  isLooding: false,
  data: [],
  isError: false,
};

export const AppReducer = (state = Data, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLooding: false,
        data: payload,
      };
    case GET_FAILURE:
      return {
        ...state,
        isLooding: false,
        isError: true,
      };
    default:
      return state;
  }
};