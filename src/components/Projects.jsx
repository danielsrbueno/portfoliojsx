import Card from "./Card";
import { useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("global");

  useLayoutEffect(() => {
    const div = document.querySelector("#smalls");
    const txt = document.querySelector("#more > p");

    if (key) {
      div.classList.add("grid");
      div.classList.remove("hidden");
      txt.textContent = t("projects.fewerprojects");
    } else {
      div.classList.add("hidden");
      txt.textContent = t("projects.moreprojects");
    }
  }, [key, t]);

  return (
    <div id="projects" className="w-full min-h-screen max-h-[150vh] flex flex-col justify-around items-center text-justify py-16 relative shadow-lg">
      <h1 className="mb-6 text-4xl font-bold text-slate-900 before:w-36 before:h-36 before:blur-3xl before:absolute before:-translate-x-24 before:-translate-y-12 before:bg-rose-300/60 dark:text-zinc-100">
        {t("projects.title")}
      </h1>
      <div className="w-8/12 flex flex-col py-12 relative gap-6 justify-center items-center">
        <div className="grid grid-flow-col gap-8 columns-2 max-md:grid-flow-row">
          <Card
            ptitle="DS Jaraguá"
            ptext={t("projects.ds.text")}
            ptype="large"
            pimg={urlDS}
            pabout={t("projects.ds.about")}
            pdate={t("month.november")}
            psite="https://ds-jaragua.vercel.app/"
            pgithub="https://github.com/freitassdev/ds-etecjaragua"
            picon={iconDS}
            ptecs={["ReactJS", "NodeJS", "Figma"]}
          />
          <Card
            ptitle="Short Summary"
            ptext={t("projects.short.text")}
            ptype="large"
            pimg={urlShort}
            picon={iconShort}
            pabout={t("projects.short.about")}
            pdate={t("month.october")}
            psite="https://short-summary-nu.vercel.app/"
            pgithub="https://github.com/danielsrbueno/short-summary"
            ptecs={["Express", "NodeJS", "Figma"]}
          />
        </div>
        <div className="grid grid-flow-col gap-6 columns-3 max-md:hidden" id="smalls">
          <Card
            ptitle="Age calculator"
            ptext={t("projects.age.text")}
            ptype="small"
            pimg={urlAge}
            picon={iconAge}
            pabout={t("projects.age.about")}
            pdate={t("month.july")}
            psite="https://danielsrbueno.github.io/age-calculator/"
            pgithub="https://github.com/danielsrbueno/age-calculator"
            ptecs={["HTML", "CSS", "JavaScript"]}
          />
          <Card
            ptitle="Festa Junina"
            ptext={t("projects.festa.text")}
            ptype="small"
            pimg={urlFesta}
            picon={iconFesta}
            pabout={t("projects.festa.about")}
            pdate={t("month.june")}
            psite="https://danielsrbueno.github.io/festa-junina/"
            pgithub="https://github.com/danielsrbueno/festa-junina"
            ptecs={["HTML", "CSS", "JavaScript"]}
          />
          <Card
            ptitle="CPS Test"
            ptext={t("projects.cps.text")}
            ptype="small"
            pimg={urlCPS}
            picon={iconCPS}
            pabout={t("projects.cps.about")}
            pdate={t("month.july")}
            psite="https://danielsrbueno.github.io/cps-test/"
            pgithub="https://github.com/danielsrbueno/cps-test"
            ptecs={["HTML", "CSS", "JavaScript"]}
          />
        </div>
        <button
          className="w-40 h-10 rounded-xl after:hover:w-44 self-center outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-0 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full mt-4
           select-none max-md:hidden dark:text-zinc-300"
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
