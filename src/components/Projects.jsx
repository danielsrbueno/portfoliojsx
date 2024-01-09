import Card from "./Card"

function Projects() {
    const urlAge = "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/age-calculator.png"
    const urlShort ="https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/short-summary.png"
    const urlDS = "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/ds-jaragua.png"
    const urlCPS = "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/cps-test.png"
    const urlFesta = "https://raw.githubusercontent.com/danielsrbueno/portfolio-imgs/main/festa-junina.png"

    return(
        <div className="w-full flex flex-col justify-around items-center text-justify py-12 relative">
            <h1 className="mb-6 text-4xl font-bold text-slate-900 before:w-36 before:h-36 before:blur-3xl before:absolute before:-translate-x-24 before:-translate-y-12 before:bg-rose-300/60">Meus projetos</h1>
            <div className="w-8/12 flex flex-col py-12 relative gap-6 justify-center items-center">
                <div className="grid grid-flow-col gap-8 columns-2">
                    <Card ptitle="DS Jaraguá" ptext="Veja tudo sobre o curso de desenvolvimento de sistemas!" ptype="large" pimg={urlDS}/>
                    <Card ptitle="Short summary" ptext="Saiba o conteúdo do vídeo sem sequer entrar nele." ptype="large" pimg={urlShort}/>
                </div>
                <div className="grid grid-flow-col gap-6 columns-3">
                    <Card ptitle="Age calculator" ptext="Veja sua idade precisamente!" ptype="small" pimg={urlAge}/>
                    <Card ptitle="Festa Junina" ptext="História, comidas e receitas, tudo sobre festa Junina!" ptype="small" pimg={urlFesta}/>
                    <Card ptitle="CPS Test" ptext="Meça seu CPS e veja sua pontuação!" ptype="small" pimg={urlCPS}/>
                </div>
            </div>
        </div>
    )
}

export default Projects