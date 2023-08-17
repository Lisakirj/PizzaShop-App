import "./assets/scss/app.scss";
import PizzaListPage from "./components/page/PizzaListPage/PizzaListPage";
import CategoriesList from "./components/ui/CategoriesList";
import Sort from "./components/ui/Sort";
import Header from "./components/ui/header/Header";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <CategoriesList />
              <Sort />
            </div>
            <PizzaListPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
