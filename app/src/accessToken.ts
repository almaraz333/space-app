let accessToken = "";

export const setAccessToken = (x: string) => {
  accessToken = x;
};

export const getAccessToken = () => {
  return accessToken;
};
