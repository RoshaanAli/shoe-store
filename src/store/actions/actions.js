import * as types from './types';
import ShoeStore from './../../config/ShoeStore';
import axios from 'axios';

export const getAllShoes = () => async (dispatch) => {
  try {
    const response = await ShoeStore.get("sneakers?limit=10");
    
    console.log(response.data)
    dispatch({
      type: types.GET_ALL_SHOES,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};
