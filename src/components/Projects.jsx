import Card from "./Card";
import { useState, useLayoutEffect } from "react";

function Projects() {
  const urlAge =
    "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/age-calculator.png";
  const urlShort =
    "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/short-summary.png";
  const urlDS =
    "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/ds-jaragua.png";
  const urlCPS =
    "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/cps-test.png";
  const urlFesta =
    "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/festa-junina.png";
  const iconDS = "https://ds-jaragua.vercel.app/assets/logo-7e40ab17.svg";
  const iconShort =
    "https://raw.githubusercontent.com/danielsrbueno/short-summary/9db44eaec84df3860d405e92d50e0f8055c99dae/public/logo.svg";
  const iconAge = "https://res.cloudinary.com/practicaldev/image/fetch/s--U6E1tTP8--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1390/f6c7428b-c890-4c97-a586-352a887caad6.png"
  const iconFesta = "https://github.com/danielsrbueno/festa-junina/blob/main/fogueira.png?raw=true"
  const iconCPS = "https://cdn1.iconfinder.com/data/icons/complete-version-1/1024/action4-512.png"

  const [key, setKey] = useState(false);

  useLayoutEffect(() => {
    const div = document.querySelector("#smalls");
    const txt = document.querySelector("#more > p");

    if (key) {
      div.classList.add("grid");
      div.classList.remove("hidden");
      txt.textContent = "Menos projetos";
    } else {
      div.classList.add("hidden");
      txt.textContent = "Mais projetos";
    }
  }, [key]);

  return (
    <div id="projects" className="w-full flex flex-col justify-around items-center text-justify py-12 relative">
      <h1 className="mb-6 text-4xl font-bold text-slate-900 before:w-36 before:h-36 before:blur-3xl before:absolute before:-translate-x-24 before:-translate-y-12 before:bg-rose-300/60">
        Meus projetos
      </h1>
      <div className="w-8/12 flex flex-col py-12 relative gap-6 justify-center items-center">
        <div className="grid grid-flow-col gap-8 columns-2">
          <Card
            ptitle="DS Jaraguá"
            ptext="Veja tudo sobre o curso de desenvolvimento de sistemas!"
            ptype="large"
            pimg={urlDS}
            pabout="Desenvolvido em parceria com dois amigos da escola, com o objetivo de promover nosso curso e ampliar nossa visibilidade, essa ideia foi sugerida por um professor, e nós decidimos assumir a responsabilidade pelo projeto. Este foi meu primeiro projeto em desenvolvimento com ReactJS!"
            pdate="Novembro, 2023"
            psite="https://ds-jaragua.vercel.app/"
            pgithub="https://github.com/freitassdev/ds-etecjaragua"
            picon={iconDS}
            ptecs={["ReactJS", "NodeJS", "Figma"]}
          />
          <Card
            ptitle="Short Summary"
            ptext="Saiba o conteúdo do vídeo sem sequer entrar nele."
            ptype="large"
            pimg={urlShort}
            picon={iconShort}
            pabout="O Short Summary permite ao usuário visualizar um resumo do vídeo sem precisar assisti-lo, utilizando inteligência artificial para extrair o texto e criar o resumo. Essa foi minha primeira experiência com Express, a qual me proporcionou muitos aprendizados sobre NodeJS."
            pdate="Outubro, 2023"
            psite="https://short-summary-nu.vercel.app/"
            pgithub="https://github.com/danielsrbueno/short-summary"
            ptecs={["Express", "NodeJS", "Figma"]}
          />
        </div>
        <div className="grid grid-flow-col gap-6 columns-3" id="smalls">
          <Card
            ptitle="Age calculator"
            ptext="Veja sua idade precisamente!"
            ptype="small"
            pimg={urlAge}
            picon={iconAge}
            pabout="O Age Calculator é uma aplicação web que permite ao usuário calcular sua idade em anos, meses e dias. Este projeto me permitiu aprender muito sobre a manipulação de datas em JavaScript, além de melhorar minhas habilidades com forms no HTML e CSS."
            pdate="Julho, 2023"
            psite="https://danielsrbueno.github.io/age-calculator/"
            pgithub="https://github.com/danielsrbueno/age-calculator"
            ptecs={["HTML", "CSS", "JavaScript"]}
          />
          <Card
            ptitle="Festa Junina"
            ptext="História, comidas e receitas, tudo sobre festa Junina!"
            ptype="small"
            pimg={urlFesta}
            picon={iconFesta}
            pabout="O Festa Junina é uma aplicação web que permite ao usuário conhecer mais sobre a festa junina, suas origens, comidas e receitas. Este projeto foi um trabalho escolar, e foi desenvolvido apenas para resonsividade de desktop. Ele me ajudou a entender melhor o funcionamento do JavaScript e a importância de um design minimalista."
            pdate="Junho, 2023"
            psite="https://danielsrbueno.github.io/festa-junina/"
            pgithub="https://github.com/danielsrbueno/festa-junina"
            ptecs={["HTML", "CSS", "JavaScript"]}
          />
          <Card
            ptitle="CPS Test"
            ptext="Meça seu CPS e veja sua pontuação!"
            ptype="small"
            pimg={urlCPS}
            picon={iconCPS}
            pabout="O CPS Test é uma aplicação web que permite ao usuário medir sua velocidade de cliques por segundo e ver sua pontuação. Este projeto foi inspirado em um desafio que meu amigo me propôs, e como sou competitivo, resolvi desenvolvê-lo. Foi uma oportunidade de aprender sobre a manipulação de eventos em JavaScript."
            pdate="Julho, 2023"
            psite="https://danielsrbueno.github.io/cps-test/"
            pgithub="https://github.com/danielsrbueno/cps-test"
            ptecs={["HTML", "CSS", "JavaScript"]}
          />
        </div>
        <button
          className="w-40 h-10 rounded-xl after:hover:w-44 self-center outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-0 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full mt-4
           select-none"
          id="more"
          onClick={() => {
            setKey(key ? false : true);
          }}
        >
          <p>Mais projetos</p>
        </button>
      </div>
    </div>
  );
}

export default Projects;
