import logo from "../Assests/logo.png";

type LogoProps = {
  height: string;
  width: string;
};

export const Logo = ({ height, width }: LogoProps) => {
  return (
    <div className="logo">
      <img src={logo} alt="planet" height={height} width={width} />
    </div>
  );
};
