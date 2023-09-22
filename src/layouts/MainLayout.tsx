import { FC } from "react";
import { Header } from "../components/ui/header";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
