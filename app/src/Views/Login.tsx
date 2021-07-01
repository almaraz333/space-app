import { useState } from "react";
import { useHistory } from "react-router-dom";
import { setAccessToken } from "../accessToken";
import { useLoginMutation } from "../generated/graphql";

import { isLoggedInState, userIdState } from "../atoms";
import { useSetRecoilState } from "recoil";

export const Login: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, error }] = useLoginMutation();

  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUserId = useSetRecoilState(userIdState);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await login({ variables: { email, password } });

        if (res && res.data) {
          setAccessToken(res.data.login.accessToken);
          setIsLoggedIn(true);
          setUserId(res.data.login.userId);
          history.push("/");
        }
      }}
    >
      <div className="bg-grey mt-28 shadow-md rounded px-8 mx-60 pt-6 pb-8 mb-4 flex flex-col">
        {error && <h1>Fuck no man</h1>}
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="Email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red text-xs italic">Please enter a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-white"
            href="#"
          >
            Forgot Password?
          </a> */}
        </div>
      </div>
    </form>
  );
};
