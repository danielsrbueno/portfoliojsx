import '../index.css'

function Navbar() {
    return (
        <nav className="w-screen px-44 py-4 bg-zinc-500/1 fixed backdrop-blur-sm flex items-center justify-around select-none z-40">
            <h1 className="font-extrabold text-5xl my-gradient-radial font-jetbrains">
                &lt;Daniel /&gt;
            </h1>
            <ul className="font-semibold text-lg flex gap-6 text-zinc-90)">
                <li><a href="">Início</a></li>
                <li><a href="">Sobre mim</a></li>
                <li><a href="">Projetos</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>
    )
}
    
        
export default Navbar