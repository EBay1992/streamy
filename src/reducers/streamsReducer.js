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
      //! the next line make a weird bug; because it doesnt delete entirly, it just makes undefined;
      // return { ...state, [action.payload.id]: undefined };
      return _.omit(state, action.payload);

    default:
      return state;
  }
};

export default streamsReducer;
