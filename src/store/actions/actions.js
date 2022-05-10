import * as types from './types';
import ShoeStore from './../../config/ShoeStore';

export const getAllShoes = () => async (dispatch) => {
  try {
    const response = await ShoeStore.get("sneakers?limit=10");

    console.log(response.data)
    // dispatch({
    //   type: types.GET_ALL_SHOES,
    //   payload: {
    //     data: response.data.message.data,
    //     status: true,
    //   },
    // });
  } catch (e) {
    console.log(e);
  }
};
