import PropTypes from "prop-types";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tooltip } from 'primereact/tooltip';
import { useTranslation } from "react-i18next";

Card.propTypes = {
  ptype: PropTypes.string.isRequired,
  pimg: PropTypes.string.isRequired,
  ptitle: PropTypes.string.isRequired,
  ptext: PropTypes.string.isRequired,
  picon: PropTypes.string.isRequired,
  pabout: PropTypes.string.isRequired,
  pdate: PropTypes.string.isRequired,
  psite: PropTypes.string.isRequired,
  pgithub: PropTypes.string.isRequired,
  ptecs: PropTypes.array.isRequired,
};

function Card({
  ptype,
  pimg,
  ptitle,
  ptext,
  picon,
  pabout,
  pdate,
  psite,
  pgithub,
  ptecs,
}) {
  const iconReact = "devicon-react-original"
  const iconNode = "devicon-nodejs-plain"
  const iconExpress = "devicon-express-original"
  const iconMongo = "devicon-mongodb-plain"
  const iconNext = "devicon-nextjs-plain"
  const iconFigma = "devicon-figma-plain"
  const iconHtml = "devicon-html5-plain"
  const iconCss = "devicon-css3-plain"
  const iconJs = "devicon-javascript-plain"
  const array = [iconHtml, iconCss, iconJs]

  const [t] = useTranslation("global");

  let iTecs = ["", "", iconFigma];

  if (ptecs[0] === "ReactJS") {
    iTecs[0] = iconReact;
  }

  if (ptecs[0] === "Express") {
    iTecs[0] = iconExpress;
  } 

  if (ptecs[1] === "NodeJS") {
    iTecs[1] = iconNode;
  }

  if (ptecs[1] === "Express") {
    iTecs[1] = iconExpress;
  }

  if (ptecs[2] === "Express") {
    iTecs[2] = iconExpress;
  }

  if (ptecs[2] === "MongoDB") {
    iTecs[2] = iconMongo;
  }

  if (ptecs[0] === "NextJS") {
    iTecs[0] = iconNext;
  }

  if (ptecs[0] === "HTML") {
    iTecs[0] = array[0];
    iTecs[1] = array[1];
    iTecs[2] = array[2];
  }

  let [visible, setVisible] = useState(false);
  
  let size = {
    body: " p-2 pb-3",
    img: "",
    btn: "w-40 h-10 rounded-xl after:hover:w-44",
    txt: "",
    title: "text-xl",
    blur: "blur-3xl",
  };

  if (ptype == "small") {
    size = {
      body: "p-2 pb-3",
      img: "",
      btn: "w-20 h-8 rounded-lg after:hover:w-24",
      txt: "text-sm",
      title: "text-lg",
      blur: "blur-2xl",
    };
  } else {
    size = {
      body: " p-2 pb-3",
      img: "",
      btn: "w-40 h-10 rounded-xl after:hover:w-44",
      txt: "",
      title: "text-xl",
      blur: "blur-3xl",
    };
  }

  return (
    <div
      className={`${size.body} bg-zinc-50/50 rounded-2xl flex flex-col justify-between shadow-md hover:scale-105 hover:shadow-xl transition-all duration-500 relative overflow-hidden dark:bg-slate-800/80`}  
    >
      <div
        className={`w-11/12 h-1/3 bg-orange-500 ${size.blur} absolute -top-12 -left-16`}
      ></div>
      <div
        className={`w-11/12 h-1/3 bg-orange-500 ${size.blur} absolute -top-12 -right-16`}
      ></div>
      <div
        className={`w-11/12 h-1/3 bg-rose-500 ${size.blur} absolute top-1/4 -left-16`}
      ></div>
      <div
        className={`w-11/12 h-1/3 bg-rose-500 ${size.blur} absolute top-1/4 -right-16`}
      ></div>

      <img
        className={`${size.img} rounded-xl self-center z-10`}
        src={pimg}
        alt=""
      />
      <div className="flex flex-col px-2 py-3 z-0">
        <h1 className={`${size.title} font-bold text-slate-900 dark:text-zinc-200`}>{ptitle}</h1>
        <p className={`${size.txt} text-slate-500 truncate dark:text-zinc-300`}>{ptext}</p>
      </div>
      <Button
        className={`${size.btn} self-center outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-0 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full select-none dark:text-zinc-300`}
        label={t("card.seemore")}
        onClick={() => setVisible(true)}
      />
      <Dialog
        className="w-10/12 h-11/12 bg-slate-100 rounded-lg p-4 shadow-2xl  selection:bg-zinc-800 selection:text-zinc-50 max-md:h-full max-md:w-full dark:bg-slate-900 dark:text-zinc-200 dark:shadow-[0_20px_35px_-12px_rgba(255,255,255,0.1)]"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <div className="flex h-full w-full max-md:flex-col-reverse overflow-y-auto overflow-x-hidden">
          <div className="w-5/6 h-full p-10 flex flex-col gap-6 max-md:w-full max-md:p-2 max-md:gap-4">
            <div className="flex gap-8 items-center">
              <img
                className="h-20 max-md:h-12"
                src={picon}
                alt={`Ícone do projeto ${ptitle}`}
              />
              <h1 className="font-black text-5xl font-jetbrains tracking-tight max-md:text-3xl">
                {ptitle}
              </h1>
            </div>
            <p className="text-xl w-11/12 font-medium max-md:text-base max-md:text-justify">{pabout}</p>
            <div className="flex items-center justify-start gap-1 font-medium text-lg">
              <i className="pi pi-calendar"></i>
              <p className="max-md:text-base">{pdate}</p>
            </div>

            <div className="flex text-3xl gap-2">
              <i className={iTecs[0] + " st"} data-pr-tooltip={ptecs[0]}></i>
              <i className={iTecs[1] + " nd"} data-pr-tooltip={ptecs[1]}></i>
              <i className={iTecs[2] + " rd"} data-pr-tooltip={ptecs[2]}></i>
              <Tooltip target=".st" mouseTrack mouseTrackLeft={10} className="px-3 py-1 rounded text-zinc-50 bg-zinc-900"></Tooltip>
              <Tooltip target=".nd" mouseTrack mouseTrackLeft={10} className="px-3 py-1 rounded text-zinc-50 bg-zinc-900"></Tooltip>
              <Tooltip target=".rd" mouseTrack mouseTrackLeft={10} className="px-3 py-1 rounded text-zinc-50 bg-zinc-900"></Tooltip>
            </div>
            <div className="flex ">
              <div className="justify-end flex gap-2 max-[540px]:flex-col">
                <a href={psite} target="blank">
                  <div className="w-40 h-10 rounded-lg after:hover:w-44 self-center outline outline-2 outline-offset-0 outline-zinc-600 font-bold text-zinc-700 z-50 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-zinc-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full flex items-center justify-between px-8 dark:text-slate-100 dark:after:bg-black dark:outline-black">
                    <i className="pi pi-external-link"></i>
                    <p>{t("card.openwebsite")}</p>
                  </div>
                </a>
                <a href={pgithub} target="blank">
                  <div className="w-40 h-10 rounded-lg after:hover:w-44 self-center outline outline-2 outline-offset-0 outline-black font-bold text-black z-50 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-black hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full flex items-center justify-between gap-2 px-6 dark:outline-white dark:text-white dark:after:bg-white dark:hover:text-black">
                    <i className="pi pi-github text-lg"></i>
                    <p>{t("card.repository")}</p>
                  </div>
                </a>
                <Button
                  label={t("card.close")}
                  onClick={() => setVisible(false)}
                  className="w-40 h-10 rounded-lg after:hover:w-44 outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-50 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full select-none dark:text-zinc-300"
                />
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center">
            <img className="w-full rounded-lg" src={pimg} alt="" />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Card;
