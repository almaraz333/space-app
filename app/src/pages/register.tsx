import { useEffect, useState } from "react";
import { useRegisterMutation } from "../generated/graphql";

import Router from "Next/router";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [reEnterPassword, setReEnterPassword] = useState("");

  const [register] = useRegisterMutation();

  const onSubmit = () => {
    register({ variables: { email, password } });
    Router.push("/");
  };

  useEffect(() => {}, [reEnterPassword]);

  return (
    <>
      <FormControl id="email" isRequired mt={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl id="password" isRequired mt={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
        />
      </FormControl>

      <FormControl id="reEnterPassword" isRequired mt={4}>
        <FormLabel>Re-Enter Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => setReEnterPassword(e.target.value)}
          placeholder="*********"
        />
      </FormControl>
      {password !== reEnterPassword && (
        <Text color="crimson" fontWeight={"bold"} position="absolute">
          Passwords do not match
        </Text>
      )}
      <Button mt={10} onClick={onSubmit}>
        Register
      </Button>
    </>
  );
};

export default Register;
