import { Link } from "react-router-dom";
import { ExamesContext } from "../context/ExamesProvider";
import { useContext } from "react";
import { SearchVideos } from "../components/serchVideos";

export default function Videos() {
  const { exames } = useContext(ExamesContext);

  return (
    <div className="container mx-auto flex pt-20">
      <SearchVideos destino="videos"/>

      <ul className="flex w-screen items-center justify-center gap-5">
        {exames.map((exame) => (
          <li key={exame.id} className="cursor-pointer size-40 border">
            <Link to={exame.id} className="flex flex-col h-full">
              <div className="h-full">img</div>
              <h2 className="border-t text-center">{exame.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
