import { useState } from "react";
// import { useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
// import { Galleria } from 'primereact/galleria';

function About() {
  let image =
    "https://github.com/danielsrbueno/portfolio-imgs/blob/main/imgPerfil.png?raw=true";

  let [visible, setVisible] = useState(false);

  // const itemTemplate = () => {
  //   return <img src={"https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/Arquivo-digitalizado.png"} alt={"item.alt"} style={{ width: '100%' }} />
  // }
  // [, "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/certificado.png", "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/certificate-_1_.png", "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/certificate.png"];

  return (
    <div id="about" className="bg-zinc-400/10 w-full flex flex-col justify-around items-center text-justify my-48 py-12 relative shadow-sm">
      <h1 className="mb-6 text-4xl font-bold text-slate-900 before:w-32 before:h-32 before:blur-3xl before:absolute before:translate-x-36 before:-translate-y-10 before:bg-cyan-300/50">
        Sobre mim
      </h1>
      <div className="p-11 flex justify-around items-center text-justify max-lg:flex-col-reverse">
        <div className="w-5/12 text-xl font-normal flex flex-col gap-4 scale-105 indent-3 text-slate-900 max-lg:w-10/12 max-sm:text-lg">
          <div className="">
            <p>
              Meu nome é Daniel Bueno, sou apaixonado por tecnologia desde
              pequeno. Comecei a desenvolver e programar em 2022, me apeguei
              totalmente pela programação, e desde então tenho buscado me
              aprimorar constantemente. Então me candidatei no processo seletivo
              para entrar na Etec Jaraguá no curso de Desenvolvimento de
              Sistemas com Ensino Médio, e felizmente fui aprovado em segundo
              lugar.
            </p>
          </div>
          <div className="">
            <p>
              Atualmente estou no 2º ano do ensino médio na Etec Jaraguá, faço
              projetos com ReactJS, NodeJS, dentre outras tecnologias, desejo
              explorar novas linguagens, tecnologias e frameworks. Por mais que
              eu esteja na área de frontend, quero me tornar full stack.
              Pretendo aplicar para vagas de estágio para ganhar experiencia
              profissional, pois nunca trabalhei nessa área.
            </p>
          </div>
          <div className="">
            <p>
              Gosto de aprender coisas novas para aplicar em meus projetos,
              sempre dedico uma parte do meu dia para estudar desenvolvimento
              sozinho. Além da tecnologia, amo treinar musculação, andar de
              bicicleta, acampar, escutar músicas, ler livros, ir à igreja e
              ver dividendos caindo na minha conta.
            </p>
          </div>
          <div className="flex relative p-2 gap-4">
            <Button
              label="Tecnologias"
              className="self-center outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-50 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full select-none w-36 h-10 rounded-lg after:hover:w-44"
              onClick={() => setVisible(true)}
            />
            {/* <Button
              label="Certificados"
              className="self-center outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-50 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full select-none w-36 h-10 rounded-lg after:hover:w-44"
              onClick={() => galleria.current.show()}
            /> */}
            {/* <Galleria value={images} item={itemTemplate} numVisible={3}/> */}
            <Dialog
              className=" bg-slate-100 rounded-lg p-10 shadow-2xl selection:bg-zinc-800 selection:text-zinc-50"
              visible={visible}
              onHide={() => setVisible(false)}
            >
              <Tooltip
                target=".icon"
                mouseTrack
                mouseTrackLeft={20}
                className="px-3 py-1 rounded text-zinc-50 bg-zinc-900 max-sm:text-xs"
              />
              <div className="text-4xl max-sm:text-3xl">
                <h1 className="font-bold text-slate-900 mb-4">Frontend</h1>
                <div className="flex gap-4 mb-12 text-5xl max-md:text-4xl max-sm:text-2xl max-sm:gap-2">
                  <i
                    className="devicon-html5-plain hover:text-red-600 transition-all icon"
                    data-pr-tooltip="HTML5 - Conhecimento sólido"
                  />
                  <i className="devicon-css3-plain hover:text-blue-600 transition-all icon" data-pr-tooltip="CSS3 - Conhecimento sólido"/>
                  <i className="devicon-javascript-plain hover:text-yellow-500 transition-all icon" data-pr-tooltip="JavaScript - Conhecimento sólido" />
                  <i className="devicon-react-original hover:text-cyan-400 transition-all icon" data-pr-tooltip="ReactJS - Estudando" />
                  <i className="devicon-tailwindcss-plain hover:text-cyan-600 transition-all icon" data-pr-tooltip="TailwindCSS - Conhecimento sólido" />
                  <i className="devicon-figma-plain hover:text-zinc-600 transition-all icon" data-pr-tooltip="Figma - Conhecimento sólido (Etec)" />
                </div>
                <h1 className="font-bold text-slate-900 mb-4">Backend</h1>
                <div className="flex gap-4 text-5xl max-md:text-4xl max-sm:text-2xl max-sm:gap-2">
                  <i className="devicon-git-plain hover:text-orange-700 transition-all icon" data-pr-tooltip="Git - Estudando" />
                  <i className="devicon-github-plain hover:text-zinc-600 transition-all icon" data-pr-tooltip="Github - Conhecimento sólido" />
                  <i className="devicon-csharp-plain hover:text-violet-600 transition-all icon" data-pr-tooltip="CShap - Conhecimento sólido (Etec)" />
                  <i className="devicon-php-plain hover:text-violet-400 transition-all icon" data-pr-tooltip="PHP - Estudando (Etec)"/>
                  <i className="devicon-java-plain hover:text-red-500 transition-all icon" data-pr-tooltip="Java - Estudando (Etec)"/>
                  <i className="devicon-nodejs-plain hover:text-lime-600 transition-all icon" data-pr-tooltip="NodeJS - Estudando"/>
                  <i className="devicon-typescript-plain hover:text-blue-600 transition-all icon" data-pr-tooltip="TypeScript - Estudando" />
                  <i className="devicon-express-original hover:text-zinc-600 transition-all icon" data-pr-tooltip="Express - Estudando" />
                  <i className="devicon-mysql-plain hover:text-sky-800 transition-all icon" data-pr-tooltip="MySQL - Estudando (Etec)" />
                  <i className="devicon-mongodb-plain hover:text-lime-600 transition-all icon" data-pr-tooltip="MongoDB - Estudando" />
                </div>
              </div>
            </Dialog>
          </div>
        </div>
        <div className="before:w-44 before:h-44 before:blur-3xl before:absolute before:translate-x-8/12 before:translate-y-8/12 before:bg-amber-300/50 flex justify-center max-lg:mb-20 lg:before:h-64 lg:before:w-64">
          <img
            src={image}
            alt="foto de perfil"
            className="w-96 rounded-full drop-shadow-lg scale-110 -mt-3 max-sm:w-1/2 max-lg:w-72"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
