import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ExamesContext } from "../context/ExamesProvider";
import { SearchVideos } from "../components/serchVideos";

export default function Quiz() {
  const { exames } = useContext(ExamesContext);

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
      alternativa1.classList.add("hidden")
      alternativa2.classList.add("hidden")
      alternativa3.classList.add("hidden")
      alternativa4.classList.add("hidden")
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
    <div className="container mx-auto flex px-4 pt-28 pb-2">
      <div className="flex w-full flex-col items-center md:flex-row justify-between grow gap-10 md:gap-20">
        <div className="flex grow flex-col gap-10 rounded-xl border px-10 py-5">
          <div>
            <h1 className="text-3xl font-bold">SUPER QUIZ</h1>
            <h3 className="text-xl font-semibold">Tema: {findExame.name}</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h3 id="pergunta" className="text-3xl font-semibold">
              {findExame.quiz[0].pergunta}
            </h3>
            
            <div className="flex flex-col gap-4">
              <p
                id="alternativa1"
                onClick={() => checarResposta()}
                className="cursor-pointer text-lg px-2 py-1 hover:bg-lime-50 border rounded-lg"
              >
                {findExame.quiz[0].alternativas.alternativa1}
              </p>
              <p
                id="alternativa2"
                onClick={() => checarResposta()}
                className="cursor-pointer text-lg px-2 py-1 hover:bg-lime-50 border rounded-lg"
              >
                {findExame.quiz[0].alternativas.alternativa2}
              </p>
              <p
                id="alternativa3"
                onClick={() => checarResposta()}
                className="cursor-pointer text-lg px-2 py-1 hover:bg-lime-50 border rounded-lg"
              >
                {findExame.quiz[0].alternativas.alternativa3}
              </p>
              <p
                id="alternativa4"
                onClick={() => checarResposta()}
                className="cursor-pointer text-lg px-2 py-1 hover:bg-lime-50 border rounded-lg"
              >
                {findExame.quiz[0].alternativas.alternativa4}
              </p>
            </div>
          </div>
        </div>

        <SearchVideos destino="quiz" />
      </div>
    </div>
  );
}
