import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import shoppingCart from "../../../assets/images/shopping-cart.png";

const EmptyCartPage: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="cart-empty">
      <div className="container">
        <div className="row justify-content-center align-items-center py-sm-4 py-md-5 p-md-4 p-lg-5  ">
          <div className="col-12 col-lg-9 d-flex  flex-column justify-content-center align-items-center">
            <h1 className="text-center mb-3">
              <span>😕</span>
              <br />
              Корзина порожня
            </h1>
            <p className="text-sm-center col-10">
              Скоріш за все, ви не замовляли ще піцу. Для того, щоб замовити
              піцу, перейдіть на{" "}
              <Link to="/" className="fw-bold">
                головну сторінку
              </Link>
              .
            </p>
            <div className="col-6 text-center mt-3 mb-5">
              <img src={shoppingCart} alt="shopping-cart" />
            </div>
            <div className="col col-sm-6 d-flex justify-content-center ">
              <button
                className="d-flex justify-content-center align-items-center"
                onClick={() => navigate(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  className="bi bi-box-arrow-in-left me-1"
                  viewBox="0 0 16 16">
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                  />{" "}
                </svg>
                <span>Вернутись назад</span>
              </button>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default EmptyCartPage;
