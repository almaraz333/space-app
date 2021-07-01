import { Svg } from "../Assets/frame";
import "../Sass/home.scss";
//@ts-ignore
import StarfieldAnimation from "react-starfield-animation";

export type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <div>
      <div className="flex items-center flex-col justify-center">
        <div className="flex items-center flex-col z-40">
          <Svg />
          <h1 className="mt-10">Where do you want you go?</h1>
        </div>
        <div className="z-30">
          <StarfieldAnimation
            numParticles={1000}
            style={{
              position: "absolute",
              left: 0,
              top: 80,
              right: 0,
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
