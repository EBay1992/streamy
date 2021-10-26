import { SIGN_OUT, SIGN_IN } from "./type.js";

export const singIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};
