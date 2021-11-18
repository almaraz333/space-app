import { Box, Text } from "@chakra-ui/react";

type ErrorMessageTextProps = {
  message: string;
};

export const ErrorMessageText: React.FC<ErrorMessageTextProps> = ({
  message,
}) => {
  return <Text color="crimson">{message}</Text>;
};
