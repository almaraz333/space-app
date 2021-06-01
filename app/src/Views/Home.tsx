import { Logo } from "../Components/Logo";
import { useUsersQuery } from "../generated/graphql";

export type Props = {};

export const Home: React.FC<Props> = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center flex-col">
        <Logo height={"400"} width={"400"} />
        <h1>Where do you want yo go?</h1>
      </div>
    </div>
  );
};
