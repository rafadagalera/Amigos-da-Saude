import { useContext } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { Link } from "react-router-dom";

export default function Personagem() {
  const { avatar, avatarInfo, setAvatar, trocarProximo, trocarAnterior } =
    useContext(AvatarContext);

  const salvarAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
  };
  console.log(avatar);

  return (
    <div className="container mx-auto pt-20 h-screen pb-10">
      <div className="border rounded-xl items-center flex justify-between h-full">
        <div className="relative h-full w-96">
          <img className="absolute" src={avatarInfo.pele[avatar.pele]} alt="" />
          <img
            className="absolute"
            src={avatarInfo.camisa[avatar.camisa]}
            alt=""
          />
          <img
            className="absolute"
            src={avatarInfo.calca[avatar.calca]}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-4 rounded-xl border px-5 py-3">
          <h1 className="text-2xl font-semibold">Customize seu personagem</h1>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <button onClick={() => trocarAnterior("pele")}>Anterior</button>
              <p>pele</p>
              <button onClick={() => trocarProximo("pele")}>Próximo</button>
            </div>

            <div className="flex justify-between">
              <button onClick={() => trocarAnterior("camisa")}>Anterior</button>
              <p>camisa</p>
              <button onClick={() => trocarProximo("camisa")}>Próximo</button>
            </div>

            <div className="flex justify-between">
              <button onClick={() => trocarAnterior("calca")}>Anterior</button>
              <p>calca</p>
              <button onClick={() => trocarProximo("calca")}>Próximo</button>
            </div>

            <div className="flex justify-between">
              <button onClick={() => trocarAnterior("tenis")}>Anterior</button>
              <p>tenis</p>
              <button onClick={() => trocarProximo("tenis")}>Próximo</button>
            </div>
          </div>

          <div className="flex justify-between">
            <button className="border px-4 py-1" onClick={salvarAvatar}>
              Salvar
            </button>
            <Link to="/videos" className="border px-4 py-1">
              Ver Videos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
