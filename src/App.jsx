import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
import Projetcs from './components/Projects'

function App() {
    const comp = useRef(null)
    

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
            }).to(title1, {
                opacity: 0,
                y: "-=30",
                delay: 0.3,
                stagger: 0.7,
            }).to(title2, {
                opacity: 0,
                y: "-=30",
                delay: 0.3,
                stagger: 0.7,
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
            <div className="w-screen h-screen overflow-x-hidden bg-zinc-100 selection:bg-zinc-800 selection:text-zinc-50 relative">
                <div className='h-screen p-10 bg-zinc-900 absolute top-0 left-0 z-50 w-full flex flex-col gap-10 tracking-tighter font-black font-jetbrains items-center justify-center text-zinc-200' id='intro-slider'>
                    <h1 className='text-5xl' id='title-1'>Esta página está em desenvolvimento...</h1>
                    <h1 className='text-6xl' id='title-2'>Seja bem-vindo!</h1>
                </div>
                <Navbar />
                <Introduction />
                <About />
                <Projetcs />
            </div>
        </>
    )
}

export default App