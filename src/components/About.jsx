function About() {
    return (
        <div className="bg-zinc-400/10 w-full flex flex-col justify-around items-center text-justify my-48 py-12 relative">
            <h1 className="mb-6 text-4xl font-bold text-slate-900 before:w-32 before:h-32 before:blur-3xl before:absolute before:translate-x-36 before:-translate-y-10 before:bg-cyan-300/50">Sobre mim</h1>
            <div className="p-11 flex justify-around items-center text-justify">
                <div className="w-5/12 text-xl font-normal flex flex-col gap-4 scale-105 indent-3 text-slate-900">
                    <div className="before:w-60 before:h-60 before:blur-3xl before:absolute before:-translate-x-32 before:-translate-y-12 before:bg-rose-300/40">
                        <p>Meu nome é Daniel Bueno, sou apaixonado por tecnologia desde pequeno. Obcecado por evolução, busco me aprimorar a cada dia.</p>
                    </div>
                    <div className="">
                        <p>Comecei a desenvolver e programar em 2022, me apeguei totalmente pela programação. Então me candidatei no processo seletivo para entrar na Etec Jaraguá no curso de Desenvolvimento de Sistemas com Ensino Médio, e felizmente passei em segundo lugar.</p>
                    </div>
                    <div className="">
                        <p>Atualmente estou no 2º ano do ensino médio e faço projetos com ReactJS e TailwindCSS, mas quero explorar novas linguagens, tecnologias e frameworks. Por mais que eu esteja na área de frontend, quero me tornar full stack. Pretendo aplicar para vagas de estágio, pois nunca trabalhei nessa área.</p>
                    </div>
                </div>
                <div className="before:w-44 before:h-44 before:blur-3xl before:absolute before:translate-x-52 before:translate-y-60 before:bg-amber-300/50">
                    <img src="../public/foto-perfil.png" alt="foto de perfil" className="w-96 rounded-full drop-shadow-lg scale-110 -mt-3"/>
                </div>
            </div>
        </div>
    )
}

export default About