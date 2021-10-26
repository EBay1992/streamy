import { SIGN_OUT, SIGN_IN } from "./type.js";

export const singIn = () => {
  return { type: SIGN_IN };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};
