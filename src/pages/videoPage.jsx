import { useContext } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { ExamesContext } from "../context/ExamesProvider";
import { useParams } from "react-router-dom";
import { SearchVideos } from "../components/serchVideos";

export default function VideoPage() {
  const { avatar, avatarInfo } = useContext(AvatarContext);
  const { exames } = useContext(ExamesContext);

  const { id } = useParams("id");
  const findExame = exames.find((exame) => exame.id == id);

  let indexDialogo = 1;
  const handleClickExame = () => {
    const textField = document.getElementById("text-field");
    const tamanhoDialogo = findExame.videoDialogo.length;

    textField.innerHTML = findExame.videoDialogo[indexDialogo];

    if (indexDialogo >= tamanhoDialogo) {
      textField.innerHTML = "Fim.";
    }
    indexDialogo += 1;
  };

  return (
    <div className="container mx-auto flex w-full flex-col gap-20 pt-20 lg:flex-row">
      <div className="grow">
        <div className="bg-amarelo-100 p-2">
          <h1 id="exame-title" className="font-yanone text-3xl">
            {findExame.name}:
          </h1>
        </div>

        <div
          id="exame"
          className="relative h-[500px] gap-4 pt-3 sm:border md:h-[600px]"
        >
          <div id="personagem" className="absolute w-36 md:w-52">
            <div className="relative">
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
            </div>
          </div>

          <div id="medico" className="absolute right-0 w-36 md:w-52">
            <div className="relative">
              <img
                src={avatarInfo.pele[avatar.pele]}
                alt=""
                className="absolute"
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
            </div>
          </div>

          <p
            id="text-field"
            className="0 absolute bottom-1 left-[50%] z-10 w-[90%] translate-x-[-50%] rounded-lg border bg-amarelo-100 px-5 py-5 font-poppins text-xl"
          >
            {findExame.videoDialogo[0]}
          </p>

          <div
            id="exame-click"
            className="absolute z-20 h-full w-full cursor-pointer"
            onClick={() => handleClickExame()}
          ></div>
        </div>
      </div>

      <div className="mb-6 h-[20rem] w-full sm:pt-5 md:h-full md:w-[25rem]">
        <SearchVideos destino="videos" />
      </div>
    </div>
  );
}
