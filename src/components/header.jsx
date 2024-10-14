import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-turquesa-100 fixed top-0 z-10 h-20 w-screen">
      <div className="container mx-auto flex h-full items-center justify-between">
        <div>LOGO</div>
        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/personagem">Personagem</Link>
          <Link to="/quiz/1">Quiz</Link>
          <Link to="/videos">Videos</Link>
        </nav>
      </div>
    </header>
  );
}
