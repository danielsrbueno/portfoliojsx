import "../index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Navbar() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState(false);

  const [t, i18n] = useTranslation("global");

  const handleResize = () => {
    if (window.innerWidth <= 980) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [section, setSection] = useState("");

  useEffect(() => {
    if (section) {
      gsap.to("#window", {
        duration: 0.75,
        ease: "expo.out",
        scrollTo: { y: section, offsetY: 80 },
      });
    }
  }, [section]);

  useEffect(() => {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.add("dark");
      document.getElementById("btn-icon").classList.remove("pi-sun");
      document.getElementById("btn-icon").classList.add("pi-moon");
    } else {
      document.documentElement.classList.remove("dark");
      document.getElementById("btn-icon").classList.remove("pi-moon");
      document.getElementById("btn-icon").classList.add("pi-sun");
    }
  }, [theme]);

  const fnUl = () => {
    if (isMobile && !menu) return " hidden ";
    else if (isMobile && menu)
      return " flex flex-col gap-7 text-zinc-700 font-semibold text-lg text-center";
    else if (!isMobile)
      return " font-semibold text-lg flex gap-7 text-zinc-700 ";
  };
  const fnNav = () => {
    if (isMobile && !menu)
      return " justify-between w-screen fixed backdrop-blur-sm flex items-center select-none z-40 min-sm:px-4 max-sm:px-12 max-md:px-20 max-lg:px-24 h-20 ";
    else if (isMobile && menu)
      return " w-screen h-screen absolute top-0 left-0 select-none flex flex-col items-center justify-center backdrop-blur-xl z-40 gap-7 text-zinc-950 font-semibold text-lg";
    else if (!isMobile)
      return " justify-around w-screen fixed backdrop-blur-sm flex items-center select-none z-40 min-sm:px-4 max-sm:px-12 max-md:px-20 max-lg:px-24 h-20";
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={fnNav() + " dark:text-zinc-300 dark:bg-zinc-900/20 bg-zinc-100/10"}>
      <h1
      className={ (isMobile & menu ? " text-4xl  font-extrabold my-gradient-radial font-jetbrains -mt-12 mb-10" : " font-extrabold my-gradient-radial font-jetbrains max-sm:text-2xl max-lg:text-4xl lg:text-5xl ") + " " }>
        &lt;Daniel /&gt;
      </h1>

      <ul className={fnUl() + " dark:text-zinc-300"}>
        <li
        id="link-1"
        className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100"
        onClick={() => { setSection("#introduction"); setMenu(false); }}>
          {t("nav.home")}
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100"
          onClick={() => {
            setSection("#about");
            setMenu(false);
          }}
        >
          {t("nav.about")}
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100 "
          onClick={() => {
            setSection("#projects");
            setMenu(false);
          }}
        >
          {t("nav.projects")}
        </li>
        <li className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100" onClick={() => { setSection("#contact"); setMenu(false) }}> {t("nav.contact")} </li>
      </ul>
      <button 
      id="btn-menu" 
      className={
        (isMobile ? "absolute top-7 right-10 pi pi-bars text-2xl z-50 " : "hidden ") +
        (isMobile & menu ? "absolute top-7 right-10 text-2xl" : "") + " select-none"
      }
      onClick={() => setMenu(!menu)}/>

      <div className="flex gap-6">
        {
          isMobile && menu && (
            <button id="btn-icon" className={" pi z-50 text-2xl select-none absolute bottom-20 right-11 " + (localStorage.getItem("theme") === "dark" ? "pi-moon" : "pi-sun")}
            onClick={() => {
              if (localStorage.theme == "dark")
                localStorage.theme = "light";
              else if (localStorage.theme == "light")
                localStorage.theme = "dark";
        
              setTheme(!theme);
            }}/>
          )
        }
        {
          !isMobile && (
            <button id="btn-icon" className={" pi z-50 text-2xl select-none " + (localStorage.getItem("theme") === "dark" ? "pi-moon" : "pi-sun")}
            onClick={() => {
              if (localStorage.theme == "dark")
                localStorage.theme = "light";
              else if (localStorage.theme == "light")
                localStorage.theme = "dark";
              setTheme(!theme);
            }}/>
          )
        }
        {
          isMobile && menu && (
            <button id="btn-lang-menu" className={" fi fi-br fib z-50 text-2xl select-none bottom-7 right-10 menu " + (localStorage.getItem("lang") === "pt" ? "fi-br" : "fi-us")}
            onClick={() => {
              localStorage.lang == "en" ? localStorage.lang = "pt" : localStorage.lang = "en";
              i18n.language === "en" ? handleChangeLanguage("pt") : handleChangeLanguage("en");
            }}
            />
          )
        }
        {
          !isMobile && (
            <button id="btn-lang" className={"fi fi-br fib z-50 text-2xl select-none " + (localStorage.getItem("lang") === "pt" ? "fi-br" : "fi-us")}
            onClick={() => {
              localStorage.lang == "en" ? localStorage.lang = "pt" : localStorage.lang = "en";
              i18n.language === "en" ? handleChangeLanguage("pt") : handleChangeLanguage("en");
            }}
            />
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;