import { createContext, useState } from "react";

export const AvatarContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AvatarProvider = ({ children }) => {
  const avatarInfo = {
    camisa: [
      "",
      "./src/assets/avatar/camisa-verde.svg",
      "./src/assets/avatar/camisa-cinza.svg",
    ],
    calca: [
      "",
      "./src/assets/avatar/calca-marrom.svg",
      "./src/assets/avatar/calca-preta.svg",
    ],
    tenis: [],
  };

  const [avatar, setAvatar] = useState({
    camisa: 0,
    calca: 0,
  });

  const trocarAnterior = (caracteristica) => {
    setAvatar((prevAvatar) => {
      const newIndex =
        (prevAvatar[caracteristica] - 1 + avatarInfo[caracteristica].length) %
        avatarInfo[caracteristica].length;
      return { ...prevAvatar, [caracteristica]: newIndex };
    });
  };

  const trocarProximo = (caracteristica) => {
    setAvatar((prevAvatar) => {
      const newIndex =
        (prevAvatar[caracteristica] + 1) % avatarInfo[caracteristica].length;
      return { ...prevAvatar, [caracteristica]: newIndex };
    });
  };

  return (
    <AvatarContext.Provider
      value={{ avatar, avatarInfo, setAvatar, trocarAnterior, trocarProximo }}
    >
      {children}
    </AvatarContext.Provider>
  );
};
