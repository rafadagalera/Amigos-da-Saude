import { createContext } from "react";

export const ExamesContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ExamesProvider = ({ children }) => {
  const exames = [
    {
      id: "1",
      name: "Exame de sangue",
      videoDialogo: [
        "Personagem: Olá, tudo bem?",
        "Medico: Olá, tudo bem e você?",
        "Personagem: Estou bem, vim fazer um exame de sangue.",
        "Medico: Certo, você já fez esse exame antes?",
        "Personagem: Sim, já fiz.",
        "Medico: Então, você esta em jejum de 12 horas?",
        "Personagem: Sim, estou em jejum.",
        "Medico: Ótimo, então vamos começar.",
      ],
      quiz: [
        {
          id: 1,
          pergunta: "pergunta 1",
          resposta: 1,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
        {
          id: 2,
          pergunta: "pergunta 2",
          resposta: 3,
          alternativas: {
            alternativa1: "teste teste teste alternativa",
            alternativa2: "ttetetetete",
            alternativa3: "dsdasdasda",
            alternativa4: "iago ta enchendo o saco pra caralho hoje",
          },
        },
        {
          id: 3,
          pergunta: "pergunta 3",
          resposta: 1,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
        {
          id: 4,
          pergunta: "pergunta 4",
          resposta: 3,
          alternativas: {
            alternativa1: "teste teste teste alternativa",
            alternativa2: "ttetetetete",
            alternativa3: "dsdasdasda",
            alternativa4: "iago ta enchendo o saco pra caralho hoje",
          },
        },
        {
          id: 5,
          pergunta: "pergunta 5",
          resposta: 2,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
      ]
    },
    {
      id: "2",
      name: "Tomografia",
      videoDialogo: [
        "Personagem: Olá, Tomo?",
        "Medico: Olá, teste tomo e você?",
        "Personagem: Estou bem, vim fazer tomo tomo tomografia.",
      ],
      quiz: [
        {
          id: 1,
          pergunta: "pergunta 1 tomo",
          resposta: 1,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
        {
          id: 2,
          pergunta: "pergunta 2",
          resposta: 3,
          alternativas: {
            alternativa1: "teste teste teste alternativa",
            alternativa2: "ttetetetete",
            alternativa3: "dsdasdasda",
            alternativa4: "iago ta enchendo o saco pra caralho hoje",
          },
        },
        {
          id: 3,
          pergunta: "pergunta 3",
          resposta: 1,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
        {
          id: 4,
          pergunta: "pergunta 4",
          resposta: 3,
          alternativas: {
            alternativa1: "teste teste teste alternativa",
            alternativa2: "ttetetetete",
            alternativa3: "dsdasdasda",
            alternativa4: "iago ta enchendo o saco pra caralho hoje",
          },
        },
        {
          id: 5,
          pergunta: "pergunta 5",
          resposta: 2,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
      ]
    },
    {
      id: "3",
      name: "Raio-x",
      videoDialogo: [],
      quiz: [
        {
          id: 1,
          pergunta: "pergunta 1 raio-x",
          resposta: 1,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
        {
          id: 2,
          pergunta: "pergunta 2",
          resposta: 3,
          alternativas: {
            alternativa1: "teste teste teste alternativa",
            alternativa2: "ttetetetete",
            alternativa3: "dsdasdasda",
            alternativa4: "iago ta enchendo o saco pra caralho hoje",
          },
        },
        {
          id: 3,
          pergunta: "pergunta 3",
          resposta: 1,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
        {
          id: 4,
          pergunta: "pergunta 4",
          resposta: 3,
          alternativas: {
            alternativa1: "teste teste teste alternativa",
            alternativa2: "ttetetetete",
            alternativa3: "dsdasdasda",
            alternativa4: "iago ta enchendo o saco pra caralho hoje",
          },
        },
        {
          id: 5,
          pergunta: "pergunta 5",
          resposta: 2,
          alternativas: {
            alternativa1: "alternativa tivav tiva tiva",
            alternativa2: "alternativa tivav tiva tiva",
            alternativa3: "alternativa tivav tiva tiva",
            alternativa4: "alternativa tivav tiva tiva",
          },
        },
      ]
    },
  ];

  return (
    <ExamesContext.Provider value={{ exames }}>
      {children}
    </ExamesContext.Provider>
  );
};
