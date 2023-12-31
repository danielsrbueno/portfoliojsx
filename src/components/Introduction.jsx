import '../index.css'

function Introduction() {
    const urlGithub = "https://github.com/danielsrbueno"
    const urlLinkedin = "https://www.linkedin.com/in/danielsrbueno"
    return (
        <div className="pt-20 w-full h-4/5 flex flex-col justify-center items-center gap-3 text-center select-none relative">
            <h1 className="text-7.5xl font-bold text-slate-900 before:w-36 before:h-36 before:blur-3xl before:absolute before:top-1/4 before:left-1/5 before:bg-rose-300/60">
                Seu próximo desenvolvedor
            </h1>
            <h1 className="text-7.5xl font-extrabold my-gradient-radial before:w-36 before:h-36 before:blur-3xl before:absolute before:top-2/4 before:right-1/4 before:bg-cyan-300/60">
                <span>Frontend ;)</span>
            </h1>
            <p className="text-xl font-medium text-slate-500 mt-5">
                Olá! Eu sou o Daniel Bueno, tenho 16 anos, sou desenvolvedor Frontend
            </p>
            <div className='flex gap-11 mt-6'>
                <a href={urlGithub} target='blank'>
                    <button className='bg-black text-white w-36 h-10 px-5 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shedow-2xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-500'>
                        <i className='pi pi-github text-xl'></i>
                        <p className='mr-3 mt-0.5'>Github</p>
                    </button>
                </a>
                <a href={urlLinkedin} target='blank'>
                    <button className='bg-white text-blue-700 w-36 h-10 px-5 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shedow-2xl hover:shadow-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-500'>
                        <i className='pi pi-linkedin text-xl'></i>
                        <p className='mr-2 mt-0.5'>LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Introduction