import { Link } from "react-router-dom";
import { ExamesContext } from "../context/ExamesProvider";
import { useContext } from "react";

export default function Videos() {
  const { exames, searchExames, filteredExames } = useContext(ExamesContext);

  return (
    <div className="container mx-auto flex pt-20">
      <div className="flex flex-col items-center rounded-xl justify-center gap-5 border px-4 py-3">
        <input
          type="text"
          onChange={() => searchExames()}
          className="rounded-md border"
        />

        <ul className="flex flex-col items-center justify-center gap-5">
          {filteredExames.map((exame) => (
            <li key={exame.id} className="cursor-pointer border">
              <Link to={exame.id} className="">
                <h2>{exame.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex w-screen items-center justify-center gap-5">
        {exames.map((exame) => (
          <li key={exame.id} className="cursor-pointer border">
            <Link to={exame.id} className="">
              <h2>{exame.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
