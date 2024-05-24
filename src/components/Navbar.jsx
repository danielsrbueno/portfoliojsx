import "../index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { useEffect, useState } from "react";

function Navbar() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState(false);

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
    if (localStorage.theme == "dark")
      localStorage.theme = "light";
    else if (localStorage.theme == "light")
      localStorage.theme = "dark";

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
      return " flex flex-col gap-7 text-zinc-800 font-semibold text-lg text-center";
    else if (!isMobile)
      return " font-semibold text-lg flex gap-7 text-zinc-600 ";
  };
  const fnNav = () => {
    if (isMobile && !menu)
      return " justify-between w-screen bg-zinc-500/1 fixed backdrop-blur-sm flex items-center select-none z-40 min-sm:px-4 max-sm:px-12 max-md:px-20 max-lg:px-24 h-20 ";
    else if (isMobile && menu)
      return " w-screen h-screen absolute top-0 left-0 select-none flex flex-col items-center justify-center bg-zinc-500/1 backdrop-blur-xl z-40 gap-7 text-zinc-950 font-semibold text-lg";
    else if (!isMobile)
      return " justify-around w-screen bg-zinc-500/1 fixed backdrop-blur-sm flex items-center select-none z-40 min-sm:px-4 max-sm:px-12 max-md:px-20 max-lg:px-24 h-20";
  };

  return (
    <nav className={fnNav() + " dark:text-zinc-300"}>
      <h1
      className={ (isMobile & menu ? " text-4xl  font-extrabold my-gradient-radial font-jetbrains -mt-12 mb-10" : " font-extrabold my-gradient-radial font-jetbrains max-sm:text-2xl max-lg:text-4xl lg:text-5xl ") + " " }>
        &lt;Daniel /&gt;
      </h1>

      <ul className={fnUl() + " dark:text-zinc-300"}>
        <li
        id="link-1"
        className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100"
        onClick={() => { setSection("#introduction"); setMenu(false); }}>
          Início
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100"
          onClick={() => {
            setSection("#about");
            setMenu(false);
          }}
        >
          Sobre mim
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100 "
          onClick={() => {
            setSection("#projects");
            setMenu(false);
          }}
        >
          Projetos
        </li>
        <li className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95 dark:hover:border-zinc-100/95 dark:hover:text-zinc-100" onClick={() => { setSection("#contact"); setMenu(false) }}> Contato </li>
      </ul>
      <button 
      id="btn-menu" 
      className={
        (isMobile ? "absolute top-7 right-10 pi pi-bars text-2xl z-50 " : "hidden ") +
        (isMobile & menu ? "absolute top-7 right-10 text-2xl" : "") + " select-none"
      }
      onClick={() => setMenu(!menu)}/>

      {
        isMobile && menu && (
          <button id="btn-icon" className={" pi z-50 text-2xl select-none absolute bottom-7 right-10 " + (localStorage.getItem("theme") === "dark" ? "pi-moon" : "pi-sun")}
          onClick={() => setTheme(!theme)}/>
        )
      }
      {
        !isMobile && (
          <button id="btn-icon" className={" pi z-50 text-2xl select-none " + (localStorage.getItem("theme") === "dark" ? "pi-moon" : "pi-sun")}
          onClick={() => setTheme(!theme)}/>
        )
      }
      
    </nav>
  );
}

export default Navbar;