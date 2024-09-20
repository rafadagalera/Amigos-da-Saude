import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen pt-20">
      <div className="h-[40vh] bg-amarelo-100">Banner</div>

      <div className="container mx-auto flex justify-between gap-20 pt-24">
        <div className="flex grow rounded-[4.5rem] border-2 border-azul-100 px-5 py-10">
          <nav className="flex flex-col gap-5">
            <Link>Criar Personagem</Link>
            <Link>Meus Videos</Link>
            <Link className="">Quiz Educativo</Link>
          </nav>
        </div>

        <div className="w-[60%] text-azul-900">
          <h1 className="font-yanone text-[4rem]">Bem-Vindo!</h1>
          <div className="flex flex-col gap-5 font-nunito text-[2rem]">
            <p>
              Estamos felizes em ter você aqui! Nossa missão é transformar a sua
              experiência no hospital em uma aventura divertida e educativa.
            </p>
            <p>
              Nossa plataforma foi criada especialmente para você, e estamos
              aqui para te ensinar um pouquinho sobre tudo que acontece dentro
              do hospital.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[98.75rem]">
        <div className="absolute top-0 flex h-[50rem] w-full justify-end bg-vetor1 bg-contain bg-right bg-no-repeat pr-8 pt-56">
          <div className="flex w-[46.25rem] flex-col">
            <h3 className="font-yanone text-[2.8125rem] font-bold text-azul-900">
              Teste Seus Conhecimentos
            </h3>
            <p className="font-open-sans text-[1.6rem] font-normal">
              Com o Quiz: Coloque seus conhecimentos à prova Com nossos quizzes
              interativos! Eles são uma maneira divertida de revisar o que você
              aprendeu e se preparar para o que vem pela frente. Responda às
              perguntas e veja o quanto você aprendeu!
            </p>
            <button className="ml-72 mt-6 w-[18.75rem] items-end rounded-xl border-2 border-azul-900 font-yanone text-[2.1875rem] font-medium text-azul-900">
              Faça o quiz!
            </button>
          </div>
        </div>

        <div className="absolute top-[28rem] flex h-[42.5rem] w-full bg-vetor2 bg-contain bg-left bg-no-repeat">
          <div className="w-[45rem] ml-10 mt-32">
            <h3 className="font-yanone text-[2.8125rem] font-bold text-azul-900">
              Crie Seu Personagem
            </h3>
            <p className="font-open-sans text-[1.6rem] font-normal">
              Solte a imaginação e crie um personagem que seja a sua cara!
              Escolha entre uma variedade de roupas, acessórios e expressões
              para criar um amigo especial que estará ao seu lado em toda a
              jornada. É fácil e divertido - e o melhor de tudo, seu personagem
              será o protagonista de suas aventuras!
            </p>
            <button className="mt-8 w-[18.75rem] rounded-xl border-2 border-azul-900 font-yanone text-[2.1875rem] font-medium text-azul-900">
              Crie seu personagem!
            </button>
          </div>
        </div>

        <div className="absolute top-[54rem] flex h-[43rem] w-full justify-end bg-vetor3 bg-contain bg-right bg-no-repeat">
          <div className="mr-8 mt-56 w-[46.25rem]">
            <h3 className="font-yanone text-[2.8125rem] font-bold text-azul-900">
              Assista A Videos Educativos
            </h3>
            <p className="font-open-sans text-[1.6rem] font-normal">
              Aprenda sobre o que acontece no hospital de maneira simples e
              interessante com nossos vídeos educativos. Cada vídeo é feito para
              explicar processos de forma clara e amigável, ajudando você a se
              sentir mais confiante e preparado.
            </p>
            <button className="ml-48 w-[18.75rem] rounded-xl border-2 border-azul-900 font-yanone text-[2.1875rem] font-medium text-azul-900">
              Assista agora!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
