import Navbar from './components/Navbar'
import Introduction from './components/Introduction'

function App() {
    return (
        <>
            <div className="w-screen h-screen bg-slate-100">
                <Navbar />
                <Introduction />
            </div>
        </>
    )
}

export default App