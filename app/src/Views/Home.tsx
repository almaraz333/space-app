import { useUsersQuery } from "../generated/graphql";
import { Svg } from "../Assets/frame";
import "../Sass/home.scss";

export type Props = {};

export const Home: React.FC<Props> = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center flex-col">
        <Svg />
        <h1 className="mt-10">Where do you want you go?</h1>
      </div>
    </div>
  );
};
