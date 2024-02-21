import "../index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { useEffect, useState } from "react";

function Navbar() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

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

  return (
    <nav className="w-screen px-44 py-4 bg-zinc-500/1 fixed backdrop-blur-sm flex items-center justify-around select-none z-40">
      <h1 className="font-extrabold text-5xl my-gradient-radial font-jetbrains max-lg:text-4xl">
        &lt;Daniel /&gt;
      </h1>
      <ul className="font-semibold text-lg flex gap-7 text-zinc-600 max-lg:text-base">
        <li
          id="link-1"
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95"
          onClick={() => setSection("#introduction")}
        >
          Início
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95"
          onClick={() => setSection("#about")}
        >
          Sobre mim
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95"
          onClick={() => setSection("#projects")}
        >
          Projetos
        </li>
        <li
          className="cursor-pointer hover:text-zinc-950 transition-all animate-ease border-b-transparent border-b-2 hover:border-zinc-800/95 active:text-zinc-950 active:border-zinc-800/95"
          onClick={() => setSection("#contact")}
        >
          Contato
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
