import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-turquesa-100 fixed top-0 z-10 h-20 w-screen">
      <div className="container mx-auto flex h-full items-center justify-between">
        <div>LOGO</div>
        <nav className="flex gap-6">
          <Link>Home</Link>
          <Link>Personagem</Link>
          <Link>Quiz</Link>
          <Link>Videos</Link>
        </nav>
      </div>
    </header>
  );
}
