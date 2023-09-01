import { FC } from "react";

// import style from "./NotFound.module.scss";

const NotFoundPage: FC = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 d-flex  flex-column justify-content-center align-items-center">
            <h1 className="text-center mb-3">
              <span>😔</span>
              <br />
              Нічого не знайдено
            </h1>
            <p className="text-sm-center">
              на жаль, дана сторінка відсутня у нашому інтернет-магазині
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
