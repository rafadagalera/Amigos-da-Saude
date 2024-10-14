import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Quiz() {
  const { quizPerguntas } = useContext(QuizContext);
  const navigate = useNavigate();

  const { id } = useParams("id");
  const findQuiz = quizPerguntas.find((quiz) => quiz.id == id);

  const tamanhoQuiz = findQuiz.perguntas.length;
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
      alternativa1.innerHTML = "";
      alternativa2.innerHTML = "";
      alternativa3.innerHTML = "";
      alternativa4.innerHTML = "";
      return;
    }

    pergunta.innerHTML = findQuiz.perguntas[indexQuiz].pergunta;
    alternativa1.innerHTML =
      findQuiz.perguntas[indexQuiz].alternativas.alternativa1;
    alternativa2.innerHTML =
      findQuiz.perguntas[indexQuiz].alternativas.alternativa2;
    alternativa3.innerHTML =
      findQuiz.perguntas[indexQuiz].alternativas.alternativa3;
    alternativa4.innerHTML =
      findQuiz.perguntas[indexQuiz].alternativas.alternativa4;
  };

  const checarResposta = () => {
    const resposta = event.target.id.slice(-1);
    console.log(resposta);
    console.log(pontuacao);
    if (resposta == findQuiz.perguntas[indexQuiz].resposta) {
      console.log("acertou");
      pontuacao += 1;
    }
    indexQuiz += 1;
    return handleQuiz();
  };

  return (
    <div className="container mx-auto flex pt-20">
      <div className="flex w-full justify-between gap-20">
        <div className="flex grow flex-col gap-10 rounded-xl border px-10 py-5">
          <div>
            <h1>Quiz</h1>
            <h3>tema: {findQuiz.tema}</h3>
          </div>
          <div>
            <h3 id="pergunta">{findQuiz.perguntas[0].pergunta}</h3>

            <p
              id="alternativa1"
              onClick={() => checarResposta()}
              className="cursor-pointer hover:bg-lime-100"
            >
              {findQuiz.perguntas[0].alternativas.alternativa1}
            </p>
            <p
              id="alternativa2"
              onClick={() => checarResposta()}
              className="cursor-pointer hover:bg-lime-100"
            >
              {findQuiz.perguntas[0].alternativas.alternativa2}
            </p>
            <p
              id="alternativa3"
              onClick={() => checarResposta()}
              className="cursor-pointer hover:bg-lime-100"
            >
              {findQuiz.perguntas[0].alternativas.alternativa3}
            </p>
            <p
              id="alternativa4"
              onClick={() => checarResposta()}
              className="cursor-pointer hover:bg-lime-100"
            >
              {findQuiz.perguntas[0].alternativas.alternativa4}
            </p>
          </div>  
        </div>

        <div className="w-80 border px-5 py-3">
          <h1 className="text-3xl font-bold">Outros videos</h1>
          <ul className="flex flex-col gap-5">
            {quizPerguntas.map((quiz) => (
              <li key={quiz.id} className="cursor-pointer rounded-lg border">
                <Link onClick={() => navigate(`/quiz/${quiz.id}`)}>
                  <p className="text-lg font-semibold">{quiz.tema}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
