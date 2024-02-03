function About() {
    let image = "https://github.com/danielsrbueno/portfolio-imgs/blob/main/imgPerfil.png?raw=true"
    return (
        <div className="bg-zinc-400/10 w-full flex flex-col justify-around items-center text-justify my-48 py-12 relative shadow-sm">
            <h1 className="mb-6 text-4xl font-bold text-slate-900 before:w-32 before:h-32 before:blur-3xl before:absolute before:translate-x-36 before:-translate-y-10 before:bg-cyan-300/50">Sobre mim</h1>
            <div className="p-11 flex justify-around items-center text-justify">
                <div className="w-5/12 text-xl font-normal flex flex-col gap-4 scale-105 indent-3 text-slate-900">
                    <div className="">
                        <p>Meu nome é Daniel Bueno, sou apaixonado por tecnologia desde pequeno. Comecei a desenvolver e programar em 2022, me apeguei totalmente pela programação, e desde então tenho buscado me aprimorar constantemente. Então me candidatei no processo seletivo para entrar na Etec Jaraguá no curso de Desenvolvimento de Sistemas com Ensino Médio, e felizmente fui aprovado em segundo lugar.</p>
                    </div>
                    <div className="">
                        <p>Atualmente estou no 2º ano do ensino médio na Etec Jaraguá, faço projetos com ReactJS, NodeJS, dentre outras tecnologias, desejo explorar novas linguagens, tecnologias e frameworks. Por mais que eu esteja na área de frontend, quero me tornar full stack. Pretendo aplicar para vagas de estágio para ganhar experiencia profissional, pois nunca trabalhei nessa área.</p>
                    </div>
                    <div className="">
                        <p>Gosto de aprender coisas novas para aplicar em meus projetos, sempre dedico uma parte do meu dia para estudar desenvolvimento sozinho. Além da tecnologia, amo treinar musculação, andar de bicicleta, acampar, ouvir música, ler livro, ir à igreja e investir.</p>
                    </div>
                </div>
                <div className="before:w-44 before:h-44 before:blur-3xl before:absolute before:translate-x-52 before:translate-y-60 before:bg-amber-300/50">
                    <img src={image} alt="foto de perfil" className="w-96 rounded-full drop-shadow-lg scale-110 -mt-3"/>
                </div>
            </div>
        </div>
    )
}

export default About