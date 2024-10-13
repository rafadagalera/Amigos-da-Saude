import { createContext } from "react";

export const QuizContext = createContext({});

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {
  const quizPerguntas = [
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
  ];

  return (
    <QuizContext.Provider value={{ quizPerguntas }}>
      {children}
    </QuizContext.Provider>
  );
};
