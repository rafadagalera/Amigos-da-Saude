import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizProvider";

export default function Quiz() {

  const { quizPerguntas } = useContext(QuizContext);

  const tamanhoQuiz = quizPerguntas.length;
  let indexQuiz = 0;
  let pontuacao = 0;

  const handleQuiz = () => {
    const pergunta = document.querySelector("#pergunta");
    const alternativa1 = document.querySelector("#alternativa1");
    const alternativa2 = document.querySelector("#alternativa2");
    const alternativa3 = document.querySelector("#alternativa3");
    const alternativa4 = document.querySelector("#alternativa4");

    if (indexQuiz >= tamanhoQuiz) {
      console.log("acabou");
      console.log(pontuacao);

      pergunta.innerHTML = `Acabou, sua pontuação foi: ${pontuacao}`;
      alternativa1.innerHTML = ""
      alternativa2.innerHTML = ""
      alternativa3.innerHTML = ""
      alternativa4.innerHTML = ""
      return;
    }

    pergunta.innerHTML = quizPerguntas[indexQuiz].pergunta;
    alternativa1.innerHTML = quizPerguntas[indexQuiz].alternativas.alternativa1;
    alternativa2.innerHTML = quizPerguntas[indexQuiz].alternativas.alternativa2;
    alternativa3.innerHTML = quizPerguntas[indexQuiz].alternativas.alternativa3;
    alternativa4.innerHTML = quizPerguntas[indexQuiz].alternativas.alternativa4;
  };

  const checarResposta = () => {
    const resposta = event.target.id.slice(-1);

    if (resposta == quizPerguntas[indexQuiz].resposta) {
      console.log("acertou");
      pontuacao += 1;
    }
    indexQuiz += 1;
    handleQuiz();
  };

  return (
    <div className="container mx-auto flex pt-20">
      <div>
        <h3 id="pergunta">{quizPerguntas[0].pergunta}</h3>

        <p
          id="alternativa1"
          onClick={() => checarResposta()}
          className="cursor-pointer"
        >
          {quizPerguntas[0].alternativas.alternativa1}
        </p>
        <p
          id="alternativa2"
          onClick={() => checarResposta()}
          className="cursor-pointer"
        >
          {quizPerguntas[0].alternativas.alternativa2}
        </p>
        <p
          id="alternativa3"
          onClick={() => checarResposta()}
          className="cursor-pointer"
        >
          {quizPerguntas[0].alternativas.alternativa3}
        </p>
        <p
          id="alternativa4"
          onClick={() => checarResposta()}
          className="cursor-pointer"
        >
          {quizPerguntas[0].alternativas.alternativa4}
        </p>
      </div>
    </div>
  );
}
