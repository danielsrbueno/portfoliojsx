import Card from "./Card";
import { useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

function Projects() {
  const urlShort =
    "https://res.cloudinary.com/dtvc1ejqk/image/upload/v1761694956/short_fpd99h.webp";
  const urlDS =
    "https://res.cloudinary.com/dtvc1ejqk/image/upload/v1761694959/ds_ffigxp.webp";
  const urlTicket =
    "https://res.cloudinary.com/dtvc1ejqk/image/upload/v1761694958/ticket_kn9rcu.webp";
  const urlNotes =
    "https://res.cloudinary.com/dtvc1ejqk/image/upload/v1761694960/notes_e2hkp9.webp";
  const iconDS = "https://ds-jaragua.vercel.app/assets/logo-7e40ab17.svg";
  const iconShort =
    "https://res.cloudinary.com/dtvc1ejqk/image/upload/v1761694956/short-logo_qqjtnm.svg";
  const iconFlyra = "https://res.cloudinary.com/dtvc1ejqk/image/upload/v1749691050/logo-mini-390x394_zm1jbb.png";
  const urlFlyra = "https://res.cloudinary.com/dtvc1ejqk/image/upload/v1761695715/flyra-resized_wvkcdm.webp";
  const iconTicket = "https://codingconf.netlify.app/favicon.ico";
  const iconNotes = "https://www.svgrepo.com/show/526613/notes.svg";

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
            ptitle="Flyra Drones"
            ptext={t("projects.flyra.text")}
            ptype="large"
            pimg={urlFlyra}
            pabout={t("projects.flyra.about")}
            pdate={t("month.october-24")}
            psite="https://flyra.tech"
            pgithub="https://github.com/Flyra-Drones"
            picon={iconFlyra}
            ptecs={["NodeJS", "NextJS", "NestJS"]}
          />
          <Card
            ptitle="Short Summary"
            ptext={t("projects.short.text")}
            ptype="large"
            pimg={urlShort}
            picon={iconShort}
            pabout={t("projects.short.about")}
            pdate={t("month.october-23")}
            psite="https://short-summary-nu.vercel.app/"
            pgithub="https://github.com/danielsrbueno/short-summary"
            ptecs={["Express", "NodeJS", "Figma"]}
          />
        </div>
        <div className="grid grid-flow-col gap-6 columns-3 max-md:hidden" id="smalls">
        <Card
          ptitle="Ticket Generator"
          ptext={t("projects.ticket.text")}
          ptype="small"flyra
          pimg={urlTicket}
          pabout={t("projects.ticket.about")}
          pdate={t("month.january")}
          psite="https://codingconf.netlify.app/"
          pgithub="https://github.com/danielsrbueno/ticket-generator"
          picon={iconTicket}
          ptecs={["NextJS", "Express", "MongoDB"]}
        />
          <Card
            ptitle="DS Jaraguá"
            ptext={t("projects.ds.text")}
            ptype="small"
            pimg={urlDS}
            picon={iconDS}
            pabout={t("projects.ds.about")}
            pdate={t("month.november")}
            psite="https://ds-jaragua.vercel.app/"
            pgithub="https://github.com/freitassdev/ds-etecjaragua"
            ptecs={["ReactJS", "NodeJS", "Figma"]}
          />
           <Card
            ptitle="Notes"
            ptext={t("projects.notes.text")}
            ptype="small"
            pimg={urlNotes}
            picon={iconNotes}
            pabout={t("projects.notes.about")}
            pdate={t("month.october-24")}
            psite="https://notes-interface-app.netlify.app/"
            pgithub="https://github.com/danielsrbueno/notes-frontend"
            ptecs={["ReactJS", "NodeJS", "Express"]}
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
