import { FC } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCart from "./HeaderCart";
import { useLocation } from "react-router-dom";

const Header: FC = () => {
  const path = useLocation();
  return (
    <header>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <HeaderLogo />
          {path.pathname !== "/cart" && <HeaderCart />}
        </div>
      </div>
    </header>
  );
};

export default Header;
