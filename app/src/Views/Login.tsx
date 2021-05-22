import { useState } from "react";
import { useHistory } from "react-router-dom";
import { setAccessToken } from "../accessToken";
import { useLoginMutation } from "../generated/graphql";

export const Login: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log("submitted");
        console.log(email, password);
        const res = await login({ variables: { email, password } });

        if (res && res.data) {
          setAccessToken(res.data.login.accessToken);
        }

        history.push("/");
      }}
    >
      <div>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};
