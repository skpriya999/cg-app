import axios from "axios";
import {
  TODO_FAIL,
  TODO_REQUEST,
  TODO_SUCCESS,
} from "../constants/todoConstants";

export const list = () => async (dispatch) => {
  console.log("EXCE LIST OF TODOS");
  try {
    dispatch({
      type: TODO_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "http://jsonplaceholder.typicode.com/todos",
      config
    );

    dispatch({
      type: TODO_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
