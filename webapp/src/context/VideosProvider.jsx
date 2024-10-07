import { createContext } from "react";

export const VideosContext = createContext({});

// eslint-disable-next-line react/prop-types
export const VideosProvider = ({ children }) => {
  const videos = [
    {
      id: "1",
      name: "Exame de sangue",
      dialogo: [
        "Personagem: Olá, tudo bem?",
        "Medico: Olá, tudo bem e você?",
        "Personagem: Estou bem, vim fazer um exame de sangue.",
        "Medico: Certo, você já fez esse exame antes?",
        "Personagem: Sim, já fiz.",
        "Medico: Então, você esta em jejum de 12 horas?",
        "Personagem: Sim, estou em jejum.",
        "Medico: Ótimo, então vamos começar.",
      ],
    },
    {
      id: "2",
      name: "Tomografia",
      dialogo: [
        "Personagem: Olá, Tomo?",
        "Medico: Olá, teste tomo e você?",
        "Personagem: Estou bem, vim fazer tomo tomo tomografia.",
      ],
    },
    {
      id: "3",
      name: "Raio-x",
    },
  ];

  return (
    <VideosContext.Provider value={{ videos }}>
      {children}
    </VideosContext.Provider>
  );
};
