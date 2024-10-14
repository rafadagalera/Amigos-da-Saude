import { Link } from "react-router-dom";
import { ExamesContext } from "../context/ExamesProvider";
import { useContext, useState } from "react";

export default function Videos() {
  const { exames } = useContext(ExamesContext);

  const [filteredExames, setFilteredExames] = useState(exames);

  const searchExames = () => {
    const search = event.target.value.toLowerCase();
    setFilteredExames(
      exames.filter((exame) => exame.name.toLowerCase().includes(search)),
    );
  };

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
