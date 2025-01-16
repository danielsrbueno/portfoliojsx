import { useState } from "react";
// import { useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { useTranslation } from "react-i18next";
// import { Galleria } from 'primereact/galleria';
// import { gsap } from 'gsap'
//import { ScrollTrigger } from 'gsap/ScrollTrigger'

  // const itemTemplate = () => {
  //   return <img src={"https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/Arquivo-digitalizado.png"} alt={"item.alt"} style={{ width: '100%' }} />
  // }
  // [, "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/certificado.png", "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/certificate-_1_.png", "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/certificate.png"];

function About() {
  let image =
    "https://github.com/danielsrbueno/portfolio-imgs/blob/main/imgPerfil.png?raw=true";

  let [visible, setVisible] = useState(false);
  const [ t ] = useTranslation("global")

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger); 
  //   gsap.to("#about", {
  //     y: 0,
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: "#about",
  //       start: "top 10px",
  //       end: "bottom 10px",
  //     },
  //   })
  // }, []);

  return (
    <div id="about" className="bg-zinc-400/10 w-full flex flex-col justify-around items-center text-justify py-12 relative shadow-lg dark:bg-zinc-300/10 about">
      <h1 className="mb-6 text-4xl font-bold text-slate-900 before:w-32 before:h-32 before:blur-3xl before:absolute before:translate-x-36 before:-translate-y-8 before:bg-cyan-300/50 dark:text-zinc-100">
        {t("about.title")}
      </h1>
      <div className="p-11 flex justify-around items-center text-justify max-lg:flex-col-reverse">
        <div className="w-5/12 text-xl font-normal flex flex-col gap-4 scale-105 indent-3 text-slate-900 max-lg:w-10/12 max-sm:text-lg dark:text-zinc-300">
          <div className="">
            <p>
              {t("about.paragraph.text1")}
            </p>
          </div>
          <div className="">
            <p>
              {t("about.paragraph.text2")}
            </p>
          </div>
          <div className="">
            <p>
            {t("about.paragraph.text3")}
            </p>
          </div>
          <div className="flex relative p-2 gap-4">
            <Button
              label={t("about.buttonlabel")}
              className="self-center outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-50 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full select-none w-36 h-10 rounded-lg after:hover:w-44  dark:text-zinc-100"
              onClick={() => setVisible(true)}
            />
            {/* <Button
              label="Certificados"
              className="self-center outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-50 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full select-none w-36 h-10 rounded-lg after:hover:w-44"
              onClick={() => galleria.current.show()}
            /> */}
            {/* <Galleria value={images} item={itemTemplate} numVisible={3}/> */}
            <Dialog
              className=" bg-slate-100 rounded-lg p-10 shadow-2xl selection:bg-zinc-800 selection:text-zinc-50 dark:bg-slate-900 dark:selection:bg-zinc-300 dark:selection:text-slate-900 dark:text-zinc-100"
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
                <h1 className="font-bold text-slate-900 mb-4 dark:text-zinc-100">Frontend</h1>
                <div className="flex gap-4 mb-12 text-5xl max-md:text-4xl max-sm:text-2xl max-sm:gap-2 dark:text-zinc-300">
                  <i
                    className="devicon-html5-plain hover:text-red-600 transition-all icon"
                    data-pr-tooltip={"HTML5 - " + t("about.tooltip.solidknowledge")}
                  />
                  <i className="devicon-css3-plain hover:text-blue-600 transition-all icon" data-pr-tooltip={"CSS3 - " + t("about.tooltip.solidknowledge")}/>
                  <i className="devicon-javascript-plain hover:text-yellow-500 transition-all icon" data-pr-tooltip={"JavaScript - " + t("about.tooltip.intermediateknowledge")} />
                  <i className="devicon-react-original hover:text-cyan-400 transition-all icon" data-pr-tooltip={"ReactJS - " + t("about.tooltip.studying")} />
                  <i className="devicon-tailwindcss-plain hover:text-cyan-600 transition-all icon" data-pr-tooltip={"TailwindCSS - " + t("about.tooltip.intermediateknowledge")} />
                  <i className="devicon-figma-plain hover:text-zinc-600 transition-all icon" data-pr-tooltip={"Figma -  " + t("about.tooltip.intermediateknowledge") + " (Etec)"} />
                </div>
                <h1 className="font-bold text-slate-900 mb-4 dark:text-zinc-100">Backend</h1>
                <div className="flex flex-col gap-4 text-5xl max-md:text-4xl max-sm:text-2xl max-sm:gap-2 dark:text-zinc-300">
                  <div className="flex gap-4 text-5xl max-md:text-4xl max-sm:text-2xl max-sm:gap-2 dark:text-zinc-300">
                    <i className="devicon-nodejs-plain hover:text-lime-600 transition-all icon" data-pr-tooltip={"NodeJS - " + t("about.tooltip.studying")}/>
                    <i className="devicon-typescript-plain hover:text-blue-600 transition-all icon" data-pr-tooltip={"TypeScript - " + t("about.tooltip.studying")} />
                    <i className="devicon-nextjs-plain hover:text-zinc-700 transition-all icon" data-pr-tooltip={"NextJS - " + t("about.tooltip.studying")} />
                    <i className="devicon-express-original hover:text-zinc-600 transition-all icon" data-pr-tooltip={"Express - " + t("about.tooltip.studying")} />
                    <i className="devicon-git-plain hover:text-orange-700 transition-all icon" data-pr-tooltip={"Git - " + t("about.tooltip.intermediateknowledge")} />
                    <i className="devicon-github-plain hover:text-zinc-600 transition-all icon" data-pr-tooltip={"Github - " + t("about.tooltip.intermediateknowledge")} />
                  </div>
                  <div className="flex gap-4 text-5xl max-md:text-4xl max-sm:text-2xl max-sm:gap-2 dark:text-zinc-300">
                    <i className="devicon-mysql-plain hover:text-sky-800 transition-all icon" data-pr-tooltip={"MySQL - " + t("about.tooltip.studying") + " (Etec)"} />
                    <i className="devicon-mongodb-plain hover:text-lime-600 transition-all icon" data-pr-tooltip={"MongoDB - " + t("about.tooltip.studying")} />
                    <i className="devicon-docker-plain hover:text-sky-400 transition-all icon" data-pr-tooltip={"Docker - " + t("about.tooltip.studying")} />
                    <i className="devicon-php-plain hover:text-violet-400 transition-all icon" data-pr-tooltip={"PHP - " + t("about.tooltip.studying") + " (Etec)"}/>
                    <i className="devicon-csharp-plain hover:text-violet-600 transition-all icon" data-pr-tooltip={"CShap - " + t("about.tooltip.intermediateknowledge") + " (Etec)"} />
                    <i className="devicon-java-plain hover:text-red-500 transition-all icon" data-pr-tooltip={"Java - " + t("about.tooltip.studying") + " (Etec)"}/>
                  </div>
                  <div className="flex gap-4 text-5xl max-md:text-4xl max-sm:text-2xl max-sm:gap-2 dark:text-zinc-300">
                    <i className="devicon-nestjs-plain hover:text-rose-500 transition-all icon" data-pr-tooltip={"NestJS - " + t("about.tooltip.studying")}/>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
        <div className="before:w-44 before:h-44 before:blur-3xl before:absolute before:translate-x-8/12 before:translate-y-8/12 before:bg-amber-300/50 flex justify-center max-lg:mb-20 lg:before:h-64 lg:before:w-64">
          <img
            src={image}
            alt={t("about.imgalt")}
            className="w-96 rounded-full drop-shadow-lg scale-110 -mt-3 max-sm:w-1/2 max-lg:w-72"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
