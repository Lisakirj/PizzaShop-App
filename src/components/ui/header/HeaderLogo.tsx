import { FC } from "react";
import pizzaLogo from "../../../assets/images/pizza.logo.svg";

const HeaderLogo: FC = () => {
  return (
    <div className="header__logo">
      <img width="38" src={pizzaLogo} alt="Pizza logo" />
      <div>
        <h1>React-Ts Pizza</h1>
        <p>найсмачніша піца у Всесвіті</p>
      </div>
    </div>
  );
};

export default HeaderLogo;
