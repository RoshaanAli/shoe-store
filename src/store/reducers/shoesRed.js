import { GET_ALL_SHOES } from "../../actions/types";

const initialState = { data: [] };

export default function shoesRed(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SHOES:
      return state;
    default:
      return state;
  }
}
