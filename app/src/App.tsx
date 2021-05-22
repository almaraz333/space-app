import { access } from "fs";
import { useEffect, useState } from "react";
import { setAccessToken } from "./accessToken";
import { Routes } from "./Routes";

export type Props = {};

export const App: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (x) => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <Routes />;
};
