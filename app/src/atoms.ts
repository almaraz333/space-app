import { atom } from "recoil";

export const accessTokenState = atom<string>({
  key: "accessToken",
  default: "",
});

export const isLoggedInState = atom({
  key: "isLoggedIn",
  default: false,
});
