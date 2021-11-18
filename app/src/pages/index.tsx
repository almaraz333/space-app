import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { setAccessToken } from "../accessToken";
import { Section } from "../Components/Section";
import { ErrorMessageText } from "../Components/ErrorMessageText";

const Page = () => {
  const [loading, setLoading] = useState(true);

  const [address, setAddress] = useState("0");
  const [ether, setEther] = useState("0");

  const toast = useToast();

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

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = () => {
    startPayment({ setTxs: 6, ether: 6, address: 6 });

    toast({
      title: "Submitted!",
      status: "success",
      duration: 3000,
      isClosable: true,
      variant: "subtle",
    });
  };

  const startPayment = async ({ setTxs, ether, address }: any) => {
    const win = window as any;
    // if (!win.etherium) {
    //   throw new Error("No crypto wallet found, Please install it at ");
    // }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Section delay=".1">
        <FormControl id="address" isRequired mt={4}>
          <FormLabel>ETH Address</FormLabel>
          <Input type="text" onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl id="amount" isRequired mt={4}>
          <FormLabel>ETH Amount</FormLabel>
          <Input
            type="number"
            {...register("amount", {
              onChange: (e) => setEther(e.target.value),
              required: "This is required.",
              valueAsNumber: true,
            })}
          />
        </FormControl>

        <ErrorMessage
          errors={errors}
          name="amount"
          render={({ message }: { message: string }) => (
            <ErrorMessageText message={message} />
          )}
        />

        <Button mt={10} type="submit">
          Send
        </Button>
      </Section>
    </form>
  );
};

export default Page;
