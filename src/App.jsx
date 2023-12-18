import Navbar from './components/Navbar'
import Introduction from './components/Introduction'

function App() {
    return (
        <>
            <div className="w-screen h-screen bg-zinc-300">
                <Navbar />
                <Introduction />
            </div>
        </>
        
    )
}

export default App