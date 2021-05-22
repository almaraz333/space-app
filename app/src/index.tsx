import ReactDOM from "react-dom";
import { Routes } from "./Routes";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { getAccessToken } from "./accessToken";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();
  return {
    headers: {
      authorization: token ? `bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
  link: authLink,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
