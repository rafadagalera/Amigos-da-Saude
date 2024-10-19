import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ExamesContext } from "../context/ExamesProvider";
import { SearchVideos } from "../components/serchVideos";

export default function Quiz() {
  const { exames, searchExames, filteredExames } = useContext(ExamesContext);
  const navigate = useNavigate();

  const { id } = useParams("id");
  const findExame = exames.find((quiz) => quiz.id == id);

  const tamanhoQuiz = findExame.quiz.length;
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

    pergunta.innerHTML = findExame.quiz[indexQuiz].pergunta;
    alternativa1.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa1;
    alternativa2.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa2;
    alternativa3.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa3;
    alternativa4.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa4;
  };

  const checarResposta = () => {
    const resposta = event.target.id.slice(-1);
    if (resposta == findExame.quiz[indexQuiz].resposta) {
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
            <h3>Tema: {findExame.name}</h3>
          </div>
          <div>
            <h3 id="pergunta">{findExame.quiz[0].pergunta}</h3>

            <div>
              <p
                id="alternativa1"
                onClick={() => checarResposta()}
                className="cursor-pointer hover:bg-lime-100"
              >
                {findExame.quiz[0].alternativas.alternativa1}
              </p>
              <p
                id="alternativa2"
                onClick={() => checarResposta()}
                className="cursor-pointer hover:bg-lime-100"
              >
                {findExame.quiz[0].alternativas.alternativa2}
              </p>
              <p
                id="alternativa3"
                onClick={() => checarResposta()}
                className="cursor-pointer hover:bg-lime-100"
              >
                {findExame.quiz[0].alternativas.alternativa3}
              </p>
              <p
                id="alternativa4"
                onClick={() => checarResposta()}
                className="cursor-pointer hover:bg-lime-100"
              >
                {findExame.quiz[0].alternativas.alternativa4}
              </p>
            </div>
          </div>
        </div>

        <SearchVideos destino="quiz"/> 
      </div>
    </div>
  );
}
