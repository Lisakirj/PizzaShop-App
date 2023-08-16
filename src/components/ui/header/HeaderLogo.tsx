import { FC } from "react";

const HeaderLogo: FC = () => {
  return (
    <div className="header__logo">
      <img width="38" src="/pizza.logo.svg" alt="Pizza logo" />
      <div>
        <h1>React Pizza</h1>
        <p>найсмачніша піца у Всесвіті</p>
      </div>
    </div>
  );
};

export default HeaderLogo;
