import streams from "../apis/streams";
import {
  SIGN_OUT,
  SIGN_IN,
  CREATE_STREAM,
  DETELE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./type.js";

import history from "../history";

export const singIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const fetchStreams = () => async (dispatch) => {
  const { data } = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: data });
};

export const fetchStream = (id) => async (dispatch) => {
  const { data } = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: data });
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { data } = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: data });
  history.push("/");
};

export const editStream = (id, formValues) => async (dispatch) => {
  const { data } = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.post(`/streams/${id}`);
  dispatch({ type: DETELE_STREAM, payload: id });
};
