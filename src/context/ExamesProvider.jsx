import { createContext, useState } from "react";

export const ExamesContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ExamesProvider = ({ children }) => {
  const exames = [
    {
      id: "1",
      name: "Exame de sangue",
      videoDialogo: [
        "Personagem: Olá, tudo bem?",
        "Médico: Olá, tudo bem e você?",
        "Personagem: Estou bem, vim fazer um exame de sangue.",
        "Médico: Certo, você já fez esse exame antes?",
        "Personagem: Sim, já fiz.",
        "Médico: Então, você está em jejum de 12 horas?",
        "Personagem: Você quer saber se estou sem comer por 12 horas?",
        "Médico: Sim, estou perguntando isso para garantir que os resultados sejam precisos.",
        "Personagem: Sim, estou em jejum.",
        "Médico: Ótimo! O jejum ajuda a ter resultados mais claros.",
        "Personagem: O que exatamente acontece durante o exame?",
        "Médico: Durante o exame, vamos coletar uma pequena amostra de sangue.",
        "Personagem: Isso vai doer muito?",
        "Médico: Você pode sentir uma picada rápida, mas é bem rápido.",
        "Personagem: E depois do exame, o que eu faço?",
        "Médico: Após o exame, você pode voltar a comer normalmente e deve beber bastante água.",
        "Personagem: Legal! Obrigado, doutor!",
        "Médico: De nada! Agora que você sabe como funciona o exame de sangue, vamos começar!",

      ],
      quiz: [
        {
          id: 1,
          pergunta: "O que o paciente deve fazer antes de um exame de sangue?",
          resposta: 1,
          alternativas: {
            alternativa1: "Ficar em jejum por algumas horas",
            alternativa2: "Tomar um remédio para preparar para o exame",
            alternativa3: "Comer bastante",
            alternativa4: "Fazer exercícios físicos intensos.",
          },
        },
        {
          id: 2,
          pergunta: "O que significa 'jejum' para um exame de sangue?",
          resposta: 3,
          alternativas: {
            alternativa1: "Comer apenas frutas",
            alternativa2: "Beber bastante água antes do exame",
            alternativa3: "Não comer ou beber nada por algumas horas antes do exame",
            alternativa4: "Comer até ficar de barriga cheia",
          },
        },
        {
          id: 3,
          pergunta: "Por que o exame de sangue é importante?",
          resposta: 1,
          alternativas: {
            alternativa1: "Para detectar doenças",
            alternativa2: "Para medir a temperatura",
            alternativa3: "Para verificar a altura",
            alternativa4: "Para perdermos o medo de agulhas",
          },
        },
        {
          id: 4,
          pergunta: "O que acontece durante a coleta de sangue?",
          resposta: 3,
          alternativas: {
            alternativa1: "Coletamos o máximo de sangue possível para tratar uma doença",
            alternativa2: "O paciente precisa comer na hora do exame",
            alternativa3: "Coletamos uma amostra mínima de sangue do paciente.",
            alternativa4: "É normal o paciente sentir muita dor",
          },
        },
        {
          id: 5,
          pergunta: "O que acontece depois de terminar o exame?",
          resposta: 2,
          alternativas: {
            alternativa1: "O paciente deve fazer jejum por mais algumas horas",
            alternativa2: "O paciente pode voltar a comer normalmente",
            alternativa3: "O paciente deve ficar sem tomar água",
            alternativa4: "O paciente vai sentir muita dor",
          },
        },
      ],
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
            alternativa1: "alternativa tomo 1",
            alternativa2: "alternativa tomo 1",
            alternativa3: "alternativa tomo 1",
            alternativa4: "alternativa tomo 1",
          },
        },
        {
          id: 2,
          pergunta: "pergunta 2",
          resposta: 3,
          alternativas: {
            alternativa1: "alternativa tomo 2",
            alternativa2: "alternativa tomo 2",
            alternativa3: "alternativa tomo 2",
            alternativa4: "alternativa tomo 2",
          },
        },
        {
          id: 3,
          pergunta: "pergunta 3",
          resposta: 1,
          alternativas: {
            alternativa1: "alternativa tivav tomo 3",
            alternativa2: "alternativa tivav tomo 3",
            alternativa3: "alternativa tivav tomo 3",
            alternativa4: "alternativa tivav tomo 3",
          },
        },
        {
          id: 4,
          pergunta: "pergunta 4",
          resposta: 3,
          alternativas: {
            alternativa1: "alternativa tomo 4",
            alternativa2: "alternativa tomo 4",
            alternativa3: "alternativa tomo 4",
            alternativa4: "alternativa tomo 4",
          },
        },
        {
          id: 5,
          pergunta: "pergunta 5",
          resposta: 2,
          alternativas: {
            alternativa1: "alternativa tomo 5",
            alternativa2: "alternativa tomo 5",
            alternativa3: "alternativa tomo 5",
            alternativa4: "alternativa tomo 5",
          },
        },
      ],
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
      ],
    },
  ];

  const searchExames = () => {
    const search = event.target.value.toLowerCase();
    setFilteredExames(
      exames.filter((exame) => exame.name.toLowerCase().includes(search)),
    );
  };

  const [filteredExames, setFilteredExames] = useState(exames);

  return (
    <ExamesContext.Provider
      value={{ exames, searchExames, filteredExames, setFilteredExames }}
    >
      {children}
    </ExamesContext.Provider>
  );
};
