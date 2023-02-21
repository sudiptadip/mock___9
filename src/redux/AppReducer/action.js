import axios from "axios";
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes";

export const GetData = (no, cat, dif) => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(
      `https://opentdb.com/api.php?amount=${no}&category=${cat}&difficulty=${dif}&type=multiple`
    )
    .then((res) => {
      dispatch({ type: GET_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE });
    });
};
