import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-turquesa-100 fixed top-0 z-10 h-20 w-screen">
      <div className="container px-2 md:mx-auto flex h-full items-center justify-between">
        <div>LOGO</div>
        <nav className="flex justify-around gap-2 md:gap-6">
          <Link to="/" className="md:bg-verde-100 md:hover:bg-lime-100 md:active:bg-lime-200 md:focus:ring-2 md:focus:ring-verde-200 md:border md:px-4 md:py-2 rounded-3xl text-sm font-medium">HOME</Link>
          <Link to="/personagem" className="md:bg-verde-100 md:hover:bg-lime-100 md:active:bg-lime-200 md:focus:ring-2 md:focus:ring-verde-200 md:border md:px-4 md:py-2 rounded-3xl text-sm font-medium">PERSONAGEM</Link>
          <Link to="/quiz/1" className="md:bg-verde-100 md:hover:bg-lime-100 md:active:bg-lime-200 md:focus:ring-2 md:focus:ring-verde-200 md:border md:px-4 md:py-2 rounded-3xl text-sm font-medium">QUIZ</Link>
          <Link to="/videos" className="md:bg-verde-100 md:hover:bg-lime-100 md:active:bg-lime-200 md:focus:ring-2 md:focus:ring-verde-200 md:border md:px-4 md:py-2 rounded-3xl text-sm font-medium">VIDEOS</Link>
        </nav>
      </div>
    </header>
  );
}
