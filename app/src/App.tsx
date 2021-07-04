import { useEffect, useState } from "react";
import { setAccessToken } from "./accessToken";
import { Header } from "./Components/Header";
import { Routes } from "./Routes";

import "./Sass/app.scss";

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

  return (
    <div className={`app`}>
      <Header />
      <div className="pt-16">
        {" "}
        <Routes />
      </div>
    </div>
  );
};
