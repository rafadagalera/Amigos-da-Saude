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
      alternativa1.classList.add("hidden");
      alternativa2.classList.add("hidden");
      alternativa3.classList.add("hidden");
      alternativa4.classList.add("hidden");
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
    <div className="container mx-auto flex pb-2 pt-20 md:pt-28">
      <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:gap-20">
        <div className="bg-amarelo-100 flex flex-col px-4 py-6">
          <h2 className="text-[3rem] font-yanone font-bold">SUPER QUIZ</h2>
          <p className="text-xl">
            Aqui voce podera brincar no nosso quiz sobre os videos que voce
            acabou de assitir.
          </p>
        </div>

        <div className="flex flex-col gap-4 px-4">
          <SearchVideos destino="quiz" />

          <div className="flex w-full grow flex-col gap-10 rounded-xl border px-4 py-5 md:px-10">
            <div className="border-b pb-2">
              <h1 className="text-3xl font-bold">SUPER QUIZ</h1>
              <h3 className="text-xl font-semibold">Tema: {findExame.name}</h3>
            </div>
            <div className="flex flex-col gap-4">
              <h3 id="pergunta" className="text-2xl font-semibold md:text-3xl">
                {findExame.quiz[0].pergunta}
              </h3>

              <div className="flex flex-col gap-4">
                <p
                  id="alternativa1"
                  onClick={() => checarResposta()}
                  className="hover:bg-lime-50 cursor-pointer rounded-lg border px-3 py-5 text-lg md:p-3"
                >
                  {findExame.quiz[0].alternativas.alternativa1}
                </p>
                <p
                  id="alternativa2"
                  onClick={() => checarResposta()}
                  className="hover:bg-lime-50 cursor-pointer rounded-lg border px-3 py-5 text-lg md:p-3"
                >
                  {findExame.quiz[0].alternativas.alternativa2}
                </p>
                <p
                  id="alternativa3"
                  onClick={() => checarResposta()}
                  className="hover:bg-lime-50 cursor-pointer rounded-lg border px-3 py-5 text-lg md:p-3"
                >
                  {findExame.quiz[0].alternativas.alternativa3}
                </p>
                <p
                  id="alternativa4"
                  onClick={() => checarResposta()}
                  className="hover:bg-lime-50 cursor-pointer rounded-lg border px-3 py-5 text-lg md:p-3"
                >
                  {findExame.quiz[0].alternativas.alternativa4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
