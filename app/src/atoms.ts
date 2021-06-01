import { atom } from "recoil";

export const accessTokenState = atom<string>({
  key: "accessToken",
  default: "",
});

export const newsState = atom({
  key: "news",
  default: undefined,
});
