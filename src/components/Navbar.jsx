import '../index.css'

function Navbar() {
    return (
        <nav className="w-screen px-44 py-4 bg-zinc-500 fixed backdrop-blur-sm flex items-center justify-around">
        <h1 className="font-black text-5xl my-gradient-radial">&lt;<span className='font-mono text-5xl'>Daniel</span> /&gt;</h1>
        <ul className="font-medium text-lg flex gap-4 text-zinc-900">
            <li><a href="">Sobre mim</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Contato</a></li>
        </ul>
    </nav>
    )
    
}
    
        
export default Navbar