import { useState } from "react";
import { AccountInfo } from "../Components/AccountInfo";

const Account = () => {
  const [component, setComponent] = useState<string>("account_info");

  const determineComponent = () => {
    switch (component) {
      case "account_info":
        return <AccountInfo />;
    }
  };

  return (
    <div className="flex">
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

export default Account;
