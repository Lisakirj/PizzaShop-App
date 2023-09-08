import { FC } from "react";
import { Link } from "react-router-dom";

import pizzaLogo from "../../../assets/images/pizza.logo.svg";

const HeaderLogo: FC = () => {
  return (
    <div className="col-3 col-xl-4 col-lg-5 col-sm-6 d-flex  align-items-center   justify-content-start">
      <Link to="/">
        <img width="38" src={pizzaLogo} alt="Pizza logo" />
      </Link>
      <div className="mx-3">
        <h1>React+TS Pizza</h1>
        <p>найсмачніша піца у всесвіті</p>
      </div>
    </div>
  );
};

export default HeaderLogo;
