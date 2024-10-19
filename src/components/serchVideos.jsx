import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ExamesContext } from "../context/ExamesProvider";
import { Link, useNavigate } from "react-router-dom";

export const SearchVideos = ({ destino }) => {
  const { searchExames, filteredExames } = useContext(ExamesContext);
  const navigate = useNavigate();

  return (
    <div className="flex w-80 flex-col gap-5 border px-5 py-3">
      <h1 className="text-3xl font-bold">Outros temas</h1>
      <div className="flex w-full items-center rounded-full border px-2 py-1 focus-within:border-azul-200">
        <input
          type="text"
          onChange={() => searchExames()}
          className="w-[90%] focus:outline-none"
          placeholder="Pesquisar"
        />
        <div className="bg- flex h-full items-center justify-center rounded-r-full">
          <MagnifyingGlassIcon className="size-5" />
        </div>
      </div>

      <ul className="flex flex-col gap-5">
        {filteredExames.map((quiz) => (
          <li key={quiz.id} className="cursor-pointer rounded-lg border">
            <Link onClick={() => navigate(`/${destino}/${quiz.id}`)}>
              <p className="text-lg font-semibold">{quiz.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
