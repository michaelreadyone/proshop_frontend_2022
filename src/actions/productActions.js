import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
} from "../constants/productConstants";
import axios from "axios";

// action would be handling api call
// redux thunk all us to make a function(async) within a function here
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // why it doesn't work here for time sleep? try at backend
    setTimeout(() => {  console.log("World!"); }, 2000);
    const { data } = await axios.get("/api/products/");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
