import { useContext } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Personagem() {
  const { avatar, avatarInfo, setAvatar, trocarProximo, trocarAnterior } =
    useContext(AvatarContext);

  const salvarAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
  };

  return (
    <div className="container mx-auto h-screen px-4 pb-4 pt-24 md:pb-10">
      <div className="flex h-full justify-between">
        <div className="flex h-full flex-col items-center rounded-2xl border border-azul-100 px-16 py-6">
          <div className="absolute h-full">
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

          <div className="relative flex h-full w-full flex-col gap-2 md:w-[18rem]">
            <div className="absolute top-14 flex w-full justify-between md:top-20">
              <button onClick={() => trocarAnterior("pele")}>
                <ChevronLeftIcon className="size-7" />
              </button>
              <button onClick={() => trocarProximo("pele")}>
                <ChevronRightIcon className="size-7" />
              </button>
            </div>

            <div className="absolute top-36 flex w-full justify-between md:top-48">
              <button onClick={() => trocarAnterior("camisa")}>
                <ChevronLeftIcon className="size-7" />
              </button>
              <button onClick={() => trocarProximo("camisa")}>
                <ChevronRightIcon className="size-7" />
              </button>
            </div>

            <div className="absolute top-60 flex w-full justify-between md:top-80">
              <button onClick={() => trocarAnterior("calca")}>
                <ChevronLeftIcon className="size-7" />
              </button>
              <button onClick={() => trocarProximo("calca")}>
                <ChevronRightIcon className="size-7" />
              </button>
            </div>

            <div className="absolute top-80 flex w-full justify-between md:top-[26rem]">
              <button onClick={() => trocarAnterior("tenis")}>
                <ChevronLeftIcon className="size-7" />
              </button>
              <button onClick={() => trocarProximo("tenis")}>
                <ChevronRightIcon className="size-7" />
              </button>
            </div>
          </div>

          <div className="flex w-[20rem] justify-between">
            <button className="border px-4 py-1" onClick={salvarAvatar}>
              Salvar
            </button>
            <Link to="/videos" className="border px-4 py-1">
              Ver Videos
            </Link>
          </div>
        </div>

        <div className="flex w-[35rem] flex-col gap-5 border">
          <h1 className="text-end text-lg font-semibold md:text-3xl">
            Customize seu personagem
          </h1>

          <p>
            Aqui voce podera criar seu personagem do jeitinho que voce quiser.
            Aqui é o lugar que voce podera deixar sua imaginadcao fluir
          </p>

          <p>
            Seu personagem ira participar de videos interativos onde voce ira
            aprender mais sobre os exames que voce ira fazer aqui no hospital
          </p>
        </div>
      </div>
    </div>
  );
}
