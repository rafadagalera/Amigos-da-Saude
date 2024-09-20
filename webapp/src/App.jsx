import Header from "./components/header";
import Footer from "./components/footer";

import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
