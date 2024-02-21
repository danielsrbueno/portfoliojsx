import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
import Projetcs from './components/Projects'
import Contact from './components/Contact'

function App() {
    const comp = useRef(null)
    let date = new Date()
    let hour = date.getHours()
    let greeting = '';

    if (hour >= 6 && hour < 12) {
        greeting = 'Bom dia ☕'
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa tarde 🍂'
    } else {
        greeting = 'Boa noite 🌌'
    }

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

    return (
        <>
            <div id="window" className="w-screen h-screen overflow-x-hidden bg-zinc-100 selection:bg-zinc-800 selection:text-zinc-50">
                <div className='h-screen p-10 bg-zinc-900 absolute top-0 left-0 z-50 w-full flex flex-col gap-4 tracking-tighter font-black font-jetbrains items-center justify-center  text-zinc-200' id='intro-slider'>
                    <h1 className='max-sm:text-2xl sm:text-5xl lg:text-6xl' id='title-1'>{greeting}</h1>
                    <h1 className='max-sm:text-2xl sm:text-5xl lg:text-6xl' id='title-2'>Seja bem-vindo!</h1>
                </div>
                <Navbar />
                <Introduction />
                <About />
                <Projetcs />
                <Contact />
            </div>
        </>
    )
}

export default App