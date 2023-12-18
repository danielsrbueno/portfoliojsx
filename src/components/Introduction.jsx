import '../index.css'

function Introduction() {
    return (
        <div className="bg-green-500 pt-20 w-full h-4/6 flex flex-col justify-center items-center p-9">
            <h1 className="text-7xl font-bold text-slate-900 mt-6">
                Seu próximo desenvolvedor
            </h1>
            <h1 className="text-7xl font-extrabold my-4 my-gradient-radial">
                <span>Frontend ;)</span>
            </h1>
            <p className="text-lg font-medium text-slate-500 my-4">
                Olá! Eu sou o Daniel Bueno, tenho 16 anos, sou desenvolvedor Frontend
            </p>
        </div>
    )
}

export default Introduction