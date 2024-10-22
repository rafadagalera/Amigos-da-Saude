import { useContext } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Personagem() {
  const { avatar, avatarInfo, trocarProximo, trocarAnterior } =
    useContext(AvatarContext);

  const salvarAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
  };

  return (
    <div className="pb-4 pt-20 md:pb-10 md:pt-28">
      <div className="flex h-full flex-col-reverse justify-center gap-5 md:container md:mx-auto md:flex-row md:justify-between">
        <div className=" px-4">
          <div className="container mx-auto flex h-[32rem] flex-col items-center rounded-3xl border-2 border-azul-100 px-4 py-6 md:h-[36rem] md:px-16">
            <div className="absolute">
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

            <div className="relative flex h-full w-[18rem] flex-col gap-2 md:w-[20rem]">
              <div className="absolute top-14 flex w-full justify-between">
                <button onClick={() => trocarAnterior("pele")}>
                  <ChevronLeftIcon className="size-11" />
                </button>
                <button onClick={() => trocarProximo("pele")}>
                  <ChevronRightIcon className="size-11" />
                </button>
              </div>

              <div className="absolute top-36 flex w-full justify-between md:top-48">
                <button onClick={() => trocarAnterior("camisa")}>
                  <ChevronLeftIcon className="size-11" />
                </button>
                <button onClick={() => trocarProximo("camisa")}>
                  <ChevronRightIcon className="size-11" />
                </button>
              </div>

              <div className="absolute top-60 flex w-full justify-between md:top-80">
                <button onClick={() => trocarAnterior("calca")}>
                  <ChevronLeftIcon className="size-11" />
                </button>
                <button onClick={() => trocarProximo("calca")}>
                  <ChevronRightIcon className="size-11" />
                </button>
              </div>

              <div className="absolute top-80 flex w-full justify-between md:top-[26rem]">
                <button onClick={() => trocarAnterior("tenis")}>
                  <ChevronLeftIcon className="size-11" />
                </button>
                <button onClick={() => trocarProximo("tenis")}>
                  <ChevronRightIcon className="size-11" />
                </button>
              </div>
            </div>

            <div className="flex w-full max-w-[20rem] justify-between md:w-[24rem]">
              <button className="border px-4 py-1" onClick={salvarAvatar}>
                Salvar
              </button>
              <Link to="/videos" className="border px-4 py-1">
                Ver Videos
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex-col gap-5 bg-amarelo-100 px-6 py-4 md:flex md:w-[50rem] md:rounded-xl md:border">
          <h1 className="text-end font-yanone text-2xl font-semibold md:text-3xl">
            Crie seu personagem do jeitinho que voce quiser!
          </h1>

          <div className="flex flex-col gap-8 font-nunito">
            <p className="text-lg md:text-2xl">
              Aqui voce podera criar seu personagem do jeitinho que voce quiser.
            </p>

            <p className="text-lg md:text-2xl">
              Seu personagem será seu companheiro nessa aventura, ele ira
              participar de videos interativos onde voce ira aprender mais sobre
              os exames que voce ira fazer aqui no hospital e juntos vocês irão
              aprender muito!
            </p>

            <p className="text-lg md:text-2xl">
              Clique nas setas para escolher entre as opções de customização e
              quando sentir que está pronto(a), clique no botão para salvar seu
              personagem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
