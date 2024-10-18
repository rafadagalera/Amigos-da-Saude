import { useContext } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { Link } from "react-router-dom";

export default function Personagem() {
  const { avatar, avatarInfo, setAvatar, trocarProximo, trocarAnterior } =
    useContext(AvatarContext);

  const salvarAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
  };

  return (
    <div className="container px-4 mx-auto h-screen pt-24 pb-4 md:pb-10">
      <div className="relative flex h-full flex-col items-center gap-4 rounded-xl border px-5 py-3">
        <h1 className="text-lg md:text-2xl font-semibold">Customize seu personagem</h1>

        <div className="absolute top-16 h-full">
          <div className="relative h-full w-40 md:w-[13rem]">
            <img
              className="absolute"
              src={avatarInfo.pele[avatar.pele]}
              alt=""
            />
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
            <img
              className="absolute"
              src={avatarInfo.tenis[avatar.tenis]}
              alt=""
            />
          </div>
        </div>

        <div className="relative flex h-full w-full md:w-[50%] flex-col gap-2">
          <div className="absolute md:top-20 top-14 flex w-full justify-between">
            <button onClick={() => trocarAnterior("pele")}>Anterior</button>
            <button onClick={() => trocarProximo("pele")}>Próximo</button>
          </div>

          <div className="absolute md:top-44 top-36 flex w-full justify-between">
            <button onClick={() => trocarAnterior("camisa")}>Anterior</button>
            <button onClick={() => trocarProximo("camisa")}>Próximo</button>
          </div>

          <div className="absolute md:top-80 top-60 flex w-full justify-between">
            <button onClick={() => trocarAnterior("calca")}>Anterior</button>
            <button onClick={() => trocarProximo("calca")}>Próximo</button>
          </div>

          <div className="absolute md:top-[26rem] top-80 flex w-full justify-between">
            <button onClick={() => trocarAnterior("tenis")}>Anterior</button>
            <button onClick={() => trocarProximo("tenis")}>Próximo</button>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <button className="border px-4 py-1" onClick={salvarAvatar}>
            Salvar
          </button>
          <Link to="/videos" className="border px-4 py-1">
            Ver Videos
          </Link>
        </div>
      </div>
    </div>
  );
}
