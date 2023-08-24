import { FC } from "react";

import style from "./NotFound.module.scss";

const NotFoundPage: FC = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😔</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={style.description}>
        на жаль, дана сторінка відсутня у нашому інтернет-магазині
      </p>
    </div>
  );
};

export default NotFoundPage;
