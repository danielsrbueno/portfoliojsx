import '../index.css'
import { useTranslation } from "react-i18next";

function Introduction() {
    const urlGithub = "https://github.com/danielsrbueno"
    const urlLinkedin = "https://www.linkedin.com/in/danielsrbueno"
    const [t] = useTranslation("global");

    return (
        <div id='introduction' className="w-full h-screen min-h-[560px] flex flex-col justify-center items-center text-center select-none relative">
            <h1 className="font-bold text-8xl text-slate-900 before:w-36 before:h-36 before:blur-3xl before:absolute before:top-1/6 before:left-1/5 before:bg-rose-300/60 max-sm:text-4xl max-sm:px-3 dark:text-zinc-300">
                {t("intro.title")}
            </h1>
            <h1 className="font-extrabold text-8xl my-gradient-radial before:w-36 before:h-36 before:blur-3xl before:absolute before:top-2/4 before:right-1/4 before:bg-cyan-300/60 max-sm:text-5xl">
                <span>{t("intro.spantitle")}</span>
            </h1>
            <p className="text-xl font-medium text-slate-500 mt-5 max-sm:text-base max-sm:px-3 dark:text-zinc-400">
            {t("intro.subtitle")}
            </p>
            <div className='flex gap-11 mt-6 z-30 max-sm:gap-8'>
                <a href={urlGithub} target='blank'>
                    <button className='bg-black text-white max-sm:w-24 sm:w-36 max-sm:h-9 sm:h-10 max-sm:text-sm max-sm:px-2.5 px-5 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shadow-1xl hover:shadow-zinc-900/50 dark:hover:shadow-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-500'>
                        <i className='pi pi-github max-sm:text-base text-xl'></i>
                        <p className='max-sm:mr-2 mr-3 mt-0.5'>Github</p>
                    </button>
                </a>
                <a href={urlLinkedin} target='blank'>
                    <button className='bg-white text-blue-700 max-sm:w-24 sm:w-36 max-sm:h-9 sm:h-10 max-sm:text-sm max-sm:px-2 px-5 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shadow-1xl hover:shadow-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-500'>
                        <i className='pi pi-linkedin max-sm:text-base text-xl'></i>
                        <p className='max-sm:mr-1 mr-2 mt-0.5'>LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Introduction