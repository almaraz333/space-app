import { useByeQuery } from "../generated/graphql";

export type Props = {};

export const Bye: React.FC<Props> = () => {
  const { data, error, loading } = useByeQuery();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }

  return <>{data?.bye}</>;
};
