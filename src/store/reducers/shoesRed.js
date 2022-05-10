import { GET_ALL_SHOES } from "../actions/types";

const initialState = {results:[]};

export default function shoesRed(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SHOES:
      return action.payload;
    default:
      return state;
  }
}
