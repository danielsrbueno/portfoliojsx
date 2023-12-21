function About() {
    return (
        <div className="bg-zinc-400/10 w-full flex flex-col justify-around items-center text-justify my-48 py-12">
            <h1 className="mb-6 text-4xl font-bold">Sobre mim</h1>
            <div className="p-11 flex justify-around items-center text-justify">
                <div className="w-5/12 text-xl font-normal flex flex-col gap-4 scale-105 indent-3">
                    <div className="">
                        <p>Meu nome é Daniel Bueno, sou apaixonado por tecnologia desde pequeno. Obcecado por evolução, busco me aprimorar a cada dia.</p>
                    </div>
                    <div className="">
                        <p>Comecei a desenvolver e programar em Julho de 2022, me apeguei totalmente pela programação. Então me candidatei para entrar na Etec Jaraguá no curso de Desenvolvimento de Sistemas com Ensino Médio, e passei em segundo lugar. No momento estou estudando e me aperfeiçoando a cada dia.</p>
                    </div>
                    <div className="">
                        <p>Faço projetos apenas com HTML, CSS e JS puro, mas quero explorar novas linguagens, tecnologias e frameworks. Por mais que eu esteja na área de frontend, quero me tornar full stack. Pretendo aplicar para vagas de estágio, pois nunca trabalhei nessa área.</p>
                    </div>
                </div>
                <div>
                    <img src="../public/foto-perfil.png" alt="foto de perfil" className="w-96 rounded-full drop-shadow-lg scale-110 -mt-3"/>
                </div>
            </div>
        </div>
    )
}

export default About