import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-turquesa-100 fixed top-0 z-10 h-20 w-screen">
      <div className="container px-2 md:mx-auto flex h-full items-center justify-between">
        <div>LOGO</div>
        <nav className="flex justify-around gap-2 md:gap-6">
          <Link to="/" className="hover:bg-lime-100">Home</Link>
          <Link to="/personagem" className="hover:bg-lime-100">Personagem</Link>
          <Link to="/quiz/1" className="hover:bg-lime-100">Quiz</Link>
          <Link to="/videos" className="hover:bg-lime-100">Videos</Link>
        </nav>
      </div>
    </header>
  );
}
