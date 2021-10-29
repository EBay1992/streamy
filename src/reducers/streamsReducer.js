import _ from "lodash";
import {
  CREATE_STREAM,
  DETELE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "../actions/type";

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DETELE_STREAM:
      return { ...state, [action.payload.id]: undefined };
    //   const id = action.payload.id;
    //   const { id: d, ...rest } = state;
    //   return rest;

    default:
      return state;
  }
};

export default streamsReducer;
