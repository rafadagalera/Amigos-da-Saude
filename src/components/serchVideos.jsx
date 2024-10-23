import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ExamesContext } from "../context/ExamesProvider";
import { useNavigate } from "react-router-dom";

export const SearchVideos = ({ destino }) => {
  const { searchExames, filteredExames } = useContext(ExamesContext);
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-xl border px-5 pt-3">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Outros temas</h1>
        <div className="flex w-full items-center rounded-full border px-2 py-1 focus-within:border-azul-200">
          <input
            type="text"
            onChange={() => searchExames()}
            className="w-[90%] bg-branco px-2 py-1 focus:outline-none"
            placeholder="Pesquisar"
          />
          <div className="flex h-full items-center justify-center">
            <MagnifyingGlassIcon className="size-5" />
          </div>
        </div>
      </div>

      <ul className="flex h-40 flex-col gap-6 overflow-y-auto md:h-full">
        {filteredExames.map((quiz) => (
          <li
            key={quiz.id}
            className="min-h-[50%] cursor-pointer rounded-lg border hover:bg-lime-50 md:min-h-[35%]"
            onClick={() => navigate(`/${destino}/${quiz.id}`)}
          >
            <p className="px-3 py-2 text-lg font-semibold">{quiz.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
