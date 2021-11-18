import React, { useState } from "react";
import Router from "next/router";
import { setAccessToken } from "../accessToken";
import { useLoginMutation } from "../generated/graphql";

import { isLoggedInState, userIdState } from "../atoms";
import { useSetRecoilState } from "recoil";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, error }] = useLoginMutation();

  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUserId = useSetRecoilState(userIdState);

  const onSubmit = async () => {
    const res = await login({ variables: { email, password } });

    if (res && res.data) {
      setAccessToken(res.data.login.accessToken);
      setIsLoggedIn(true);
      setUserId(res.data.login.userId);
      Router.push("/");
    }
  };

  return (
    <>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
        />
      </FormControl>
      <Flex mt={4} justifyContent={"space-between"}>
        <Button onClick={onSubmit}>Submit</Button>
        <Button onClick={() => Router.push("register")}>Register</Button>
      </Flex>
    </>
  );
};

export default Login;
