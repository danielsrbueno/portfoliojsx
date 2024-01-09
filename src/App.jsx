import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
import Projetcs from './components/Projects'

function App() {
    return (
        <>
            <div className="w-screen h-screen overflow-x-hidden bg-zinc-100 selection:bg-zinc-800 selection:text-zinc-50">
                <Navbar />
                <Introduction />
                <About />
                <Projetcs />
            </div>
        </>
    )
}

export default App