import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AccountInfo } from "../Components/AccountInfo";
import { FavoriteArticles } from "../Components/FavoriteArticles";

export const Account = () => {
  const { pathname } = useLocation();
  const [component, setComponent] = useState<string>("account_info");

  useEffect(() => {
    console.log(component);
  }, [component]);

  const determineComponent = () => {
    switch (component) {
      case "account_info":
        return <AccountInfo />;
      case "favorite_articles":
        return <FavoriteArticles />;
    }
  };

  return (
    <div className="flex">
      {/* <div>
        Favorite Articles
        {articlesData?.favoriteArticles.map((article) => (
          <h1>{article.title}</h1>
        ))}
      </div> */}
      <div className="ml-10 mt-10 w-36">
        <ul className="flex flex-col">
          <li
            className="my-5 text-secondary"
            onClick={() => setComponent("account_info")}
          >
            <h2
              className={`${
                component === "account_info" && "border-b border-primary"
              } cursor-pointer`}
            >
              Account Info
            </h2>
          </li>
          <li
            className="my-5 text-secondary"
            onClick={() => setComponent("favorite_articles")}
          >
            <h2
              className={`${
                component === "favorite_articles" && "border-b border-primary"
              } cursor-pointer`}
            >
              Favorite Articles
            </h2>
          </li>
        </ul>
      </div>
      <div className="mt-10 ml-auto mr-auto w-9/12">{determineComponent()}</div>
    </div>
  );
};
