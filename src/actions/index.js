import { SIGN_OUT, SING_IN } from "./type.js";

export const singIn = () => {
  return { type: SING_IN };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};
