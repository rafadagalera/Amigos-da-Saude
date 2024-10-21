import { useContext } from "react";
import { Link } from "react-router-dom";
import imagem from "../assets/banner-home.png";
import { SearchVideos } from "../components/serchVideos";
import { ExamesContext } from "../context/ExamesProvider";

export default function Videos() {
  const { exames } = useContext(ExamesContext);

  return (
    <div className="container mx-auto flex px-4 pb-6 pt-28">
      <SearchVideos destino="videos" className="" />

      <ul className="mt-3 flex w-screen flex-col items-center justify-center gap-24 pt-3 md:flex-row">
        {exames.map((exame) => (
          <li key={exame.id} className="h-64 w-60 cursor-pointer rounded-xl">
            <Link
              to={exame.id}
              className="flex h-full flex-col transition hover:scale-110"
            >
              <img
                src={imagem}
                alt=""
                className="h-full rounded-lg object-cover"
              />
              <h2 className="bg-azul-claro-100 flex items-center justify-center py-4 text-center font-nunito text-lg font-medium uppercase active:bg-lime-200">
                {exame.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
