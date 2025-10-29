import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'

function App() {
    const comp = useRef(null)
    let date = new Date()
    let hour = date.getHours()
    let greeting

    const [t, i18n] = useTranslation("global")

    if (hour >= 6 && hour < 12) 
        greeting = t("greeting.morning")

    else if (hour >= 12 && hour < 18) 
        greeting = t("greeting.afternoon")

    else 
        greeting = t("greeting.night")
    

    useLayoutEffect(() => {
        const introSlider = document.querySelector("#intro-slider")
        const title1 = document.querySelector("#title-1")
        const title2 = document.querySelector("#title-2")

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from(title1, {
                opacity: 0,
                y: "+=35",
                stagger: 0.5,
            }).from(title2, {
                opacity: 0,
                y: "+=35",
                stagger: 0.5,
                delay: 1,
            }).to(title1, {
                opacity: 0,
                y: "-=30",
                delay: 1, 
                stagger: 0.5,
            }).to(title2, {
                opacity: 0,
                y: "-=30",
                delay: 0,
                stagger: 0.5,
            })
            .to(introSlider, {
                xPercent: "-100",
                duration: 1.3,
            })
        }, comp)

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        if (!("theme" in localStorage)) 
            localStorage.setItem("theme", "light");
          
        else if (localStorage.theme == "dark") 
            document.documentElement.classList.add("dark");
          
        else if (localStorage.theme == "light")
            document.documentElement.classList.remove("dark");
        
        if (!("lang" in localStorage)) 
            localStorage.setItem("lang", "pt");

        else if (localStorage.lang == "en")
            i18n.changeLanguage("en");
        
        else if (localStorage.lang == "pt")
            i18n.changeLanguage("pt");
        
        }, []);

    return (
        <>
            <div id="window" className="w-screen h-screen overflow-x-hidden bg-zinc-100 selection:bg-zinc-800 selection:text-zinc-50 dark:bg-slate-900 dark:selection:bg-zinc-300 dark:selection:text-slate-900 transition-all scrollbar scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-400 scroll-thumb-rounded-full dark:scrollbar-track-slate-900 dark:scrollbar-thumb-slate-600 ">
                <div className='h-screen p-10 bg-zinc-900 absolute top-0 left-0 z-50 w-full flex flex-col gap-4 tracking-tighter font-black font-jetbrains items-center justify-center  text-zinc-200' id='intro-slider'>
                    <h1 className='max-sm:text-2xl sm:text-5xl lg:text-6xl' id='title-1'>{greeting}</h1>
                    <h1 className='max-sm:text-2xl sm:text-5xl lg:text-6xl' id='title-2'>{t("welcome")}</h1>
                </div>
                <Navbar />
                <Introduction />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default App