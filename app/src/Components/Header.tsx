import { Link, useHistory } from "react-router-dom";
import "../Sass/header.scss";

import { isLoggedInState } from "../atoms";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { navOpenState } from "../atoms";

import { useLogoutMutation } from "../generated/graphql";

import { setAccessToken } from "../accessToken";
import { useEffect, useState } from "react";

import { useViewport } from "../hooks";

export type Props = {};

export const Header: React.FC<Props> = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const [logOut, { client }] = useLogoutMutation();

  const [navOpen, setNavOpen] = useRecoilState(navOpenState);

  const history = useHistory();

  const handleLogIn = () => {
    history.push("/login");
  };

  const handleLogOut = async () => {
    await logOut();
    setAccessToken("");
    await client.resetStore();
    setIsLoggedIn(false);
  };

  const { width } = useViewport();

  const mobile = width <= 1025;

  useEffect(() => {
    if (width < 1026) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  }, [width, setNavOpen]);

  return (
    <nav className="header absolute w-full flex items-center justify-between flex-wrap p-5 bg-primary shadow-md z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          to="/"
          className="font-bold text-3xl tracking-tight mr-5 site-name"
        >
          Space
        </Link>
      </div>
      <div className="block lg:hidden text-white">
        <button
          className="flex items-center px-3 py-2 border rounded"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          !navOpen && "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto border-t-2 lg:border-0 mt-3 lg:mt-0 z-50`}
      >
        <div className="text-sm  lg:flex-grow">
          <Link
            to="/news"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold"
          >
            News
          </Link>
          <Link
            to="/NASA-POTD"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold"
          >
            NASA Picture of the Day
          </Link>
          <Link
            to="/near-earth-objects"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold"
          >
            Near Earth Objects
          </Link>
        </div>
        {isLoggedIn && (
          <Link to="/account" className="mr-5">
            Account
          </Link>
        )}
        <button
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0 log-button"
          onClick={() => {
            if (isLoggedIn) {
              handleLogOut();
            }
            handleLogIn();
          }}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </nav>
  );
};
