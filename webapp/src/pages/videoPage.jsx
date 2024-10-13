import { useContext } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { VideosContext } from "../context/VideosProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function VideoPage() {
  const { avatar, avatarInfo } = useContext(AvatarContext);
  const { videos } = useContext(VideosContext);
  const navigate = useNavigate();

  const { id } = useParams("id");
  const findVideo = videos.find((video) => video.id === id);

  let indexDialogo = 1;
  const handleClickVideo = () => {
    const textField = document.getElementById("text-field");
    const tamanhoDialogo = findVideo.dialogo.length;

    textField.innerHTML = findVideo.dialogo[indexDialogo];

    if (indexDialogo >= tamanhoDialogo) {
      textField.innerHTML = "Fim.";
    }
    indexDialogo += 1;
  };

  return (
    <div className="container mx-auto flex w-screen gap-20 pt-20">
      <div className="grow">
        <div>
          <h1 id="video-title">{findVideo.name}</h1>
        </div>

        <div id="video" className="relative h-[600px] border">
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
            className="absolute bottom-10 left-[50%] z-10 w-[90%] translate-x-[-50%] rounded-lg border bg-turquesa-100 px-5 py-5"
          >
            {findVideo.dialogo[0]}
          </p>

          <div
            id="video-click"
            className="absolute z-20 h-full w-full cursor-pointer"
            onClick={() => handleClickVideo()}
          ></div>
        </div>
      </div>

      <div className="w-80 border px-5 py-3">
        <h1 className="text-3xl font-bold">Outros videos</h1>
        <ul className="flex flex-col gap-5">
          {videos.map((video) => (
            <li key={video.id} className="cursor-pointer rounded-lg border">
              <Link onClick={() => navigate(`/videos/${video.id}`)}>
                <p className="text-lg font-semibold">{video.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
