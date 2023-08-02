import { FC } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCart from "./HeaderCart";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo />
        <HeaderCart />
      </div>
    </div>
  );
};

export default Header;
