import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const handleMenu = () => {
    const menuMobile = document.querySelector("#menu_mobile");
    menuMobile.classList.toggle("hidden");
  };

  return (
    <header className="fixed top-0 z-10 h-20 w-screen bg-turquesa-100">
      <div className="container relative flex h-full items-center justify-between px-2 md:mx-auto">
        <div>LOGO</div>

        <Bars3Icon className="size-6 md:hidden" onClick={handleMenu} />
        <div id="menu_mobile" className="absolute bottom-0 right-0 translate-y-[100%] hidden">
          <nav className="flex flex-col gap-5">
            <Link to="/">HOME</Link>
            <Link to="/personagem">PERSONAGEM</Link>
            <Link to="/quiz/1">QUIZ</Link>
          </nav>
        </div>

        <nav className="hidden justify-around gap-2 md:flex md:gap-6">
          <Link
            to="/"
            className="rounded-3xl text-sm font-medium md:bg-verde-100 md:px-4 md:py-2 md:hover:bg-lime-100 md:focus:ring-2 md:focus:ring-verde-200 md:active:bg-lime-200"
          >
            HOME
          </Link>
          <Link
            to="/personagem"
            className="rounded-3xl text-sm font-medium md:bg-verde-100 md:px-4 md:py-2 md:hover:bg-lime-100 md:focus:ring-2 md:focus:ring-verde-200 md:active:bg-lime-200"
          >
            PERSONAGEM
          </Link>
          <Link
            to="/quiz/1"
            className="rounded-3xl text-sm font-medium md:bg-verde-100 md:px-4 md:py-2 md:hover:bg-lime-100 md:focus:ring-2 md:focus:ring-verde-200 md:active:bg-lime-200"
          >
            QUIZ
          </Link>
          <Link
            to="/videos"
            className="rounded-3xl text-sm font-medium md:bg-verde-100 md:px-4 md:py-2 md:hover:bg-lime-100 md:focus:ring-2 md:focus:ring-verde-200 md:active:bg-lime-200"
          >
            VIDEOS
          </Link>
        </nav>
      </div>
    </header>
  );
}
