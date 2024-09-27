import avatarImg from "../assets/avatar/avatar.svg";
import camisaVerde from "../assets/avatar/camisa-verde.svg";
import calcaPreta from "../assets/avatar/calca-preta.svg";
import { useContext, useEffect } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { Link } from "react-router-dom";

export default function Personagem() {
  const { avatar, avatarInfo, setAvatar, trocarProximo, trocarAnterior } = useContext(AvatarContext);

  useEffect(() => {
    const avatarSaved = JSON.parse(localStorage.getItem("avatar"));
    if (avatarSaved) {
      setAvatar(avatarSaved);
    }
  }, [setAvatar]);

  const salvarAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
  };
  console.log(avatar)

  return (
    <div className="pt-20 flex justify-between">
      <div className="relative w-96">
        <img className="absolute" src={avatarImg} alt="" />
        <img className="absolute" src={avatarInfo.camisa[avatar.camisa]} alt="" />
        <img className="absolute" src={avatarInfo.calca[avatar.calca]} alt="" />
      </div>

      <div>
        <h1>Customize seu personagem</h1>
        <div className="flex gap-5">
          <button onClick={() => trocarAnterior("camisa")}>Anterior</button>
          <p>camisa</p>
          <button onClick={() => trocarProximo("camisa")}>Próximo</button>
        </div>
        <div className="flex gap-5">
          <button onClick={() => trocarAnterior("calca")}>Anterior</button>
          <p>calca</p>
          <button onClick={() => trocarProximo("calca")}>Próximo</button>
        </div>
        <button onClick={salvarAvatar}>Salvar</button>
        <Link to="/videos">Ver Videos</Link>
      </div>
    </div>
  );
}
