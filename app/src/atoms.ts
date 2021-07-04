import { atom } from "recoil";

export const accessTokenState = atom<string>({
  key: "accessToken",
  default: "",
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: false,
});

export const userIdState = atom<number | null>({
  key: "userId",
  default: null,
});

export const navOpenState = atom<boolean>({
  key: "navOpen",
  default: false,
});
