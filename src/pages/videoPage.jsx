import { useContext } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { ExamesContext } from "../context/ExamesProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SearchVideos } from "../components/serchVideos";

export default function VideoPage() {
  const { avatar, avatarInfo } = useContext(AvatarContext);
  const { exames, filteredExames, searchExames } = useContext(ExamesContext);
  const navigate = useNavigate();

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
    <div className="container mx-auto flex w-screen gap-20 pt-20">
      <div className="grow">
        <div>
          <h1 id="exame-title">{findExame.name}</h1>
        </div>

        <div id="exame" className="relative h-[600px] border">
          <div id="personagem" className="absolute w-52">
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

          <div id="medico" className="absolute right-0 w-52">
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
            className="0 absolute bottom-1 left-[50%] z-10 w-[90%] translate-x-[-50%] rounded-lg border bg-turquesa-100 px-5 py-5"
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
    
      <SearchVideos destino="videos" />
    </div>
  );
}
