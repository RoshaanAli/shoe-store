import * as types from './types';
import ShoeStore from './../../config/ShoeStore';

export const getAllShoes = () => async (dispatch) => {
  try {
    const response = await ShoeStore.get();

    console.log(response.data.data)
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
