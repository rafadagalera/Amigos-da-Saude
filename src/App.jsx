import Header from "./components/header";
import Footer from "./components/footer";

import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-[100vh] bg-branco relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
