import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRegisterMutation } from "../generated/graphql";

export const Register: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submitted");
        console.log(email, password);
        register({ variables: { email, password } });
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
      <button type="submit">Register</button>
    </form>
  );
};
