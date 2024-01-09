function Card({ptype, pimg, ptitle, ptext}) {
    let size = {
        body: "w-[36rem] h-[28.2rem] p-2 pb-3", // testar p-2
        img: "",
        btn: "w-40 h-10 rounded-xl after:hover:w-44",
        txt: "",
        title: "text-xl"
    }

    if (ptype == "small")
    {
        size = {
            body: "w-[26rem] h-[22rem] px-2 pb-1.5",
            img: "",
            btn: "w-20 h-8 rounded-lg after:hover:w-24",
            txt: "text-sm",
            title: "text-lg"
        }
    }
    
    return(
        <div className={`${size.body} bg-white rounded-2xl flex flex-col justify-center shadow-md hover:scale-105 hover:shadow-xl transition-all duration-500 relative overflow-hidden`}>
            <div className="w-96 h-36 bg-orange-500 blur-3xl absolute -top-12 -left-16"></div>
            <div className="w-96 h-36 bg-orange-500 blur-3xl absolute -top-12 -right-16"></div>
            <div className="w-96 h-36 bg-rose-500 blur-3xl absolute top-1/4 -left-16"></div>
            <div className="w-96 h-36 bg-rose-500 blur-3xl absolute top-1/4 -right-16"></div>
            
            <img className={`${size.img} rounded-xl self-center z-10`} src={pimg} alt="" />
            <div className="flex flex-col px-2 py-3 z-0">
                <h1 className={`${size.title} font-bold text-slate-900`}>{ptitle}</h1>
                <p className={`${size.txt} text-slate-500`}>{ptext}</p>
            </div>
            <button className={`${size.btn} self-center outline outline-2 outline-offset-0 outline-rose-600 font-bold text-slate-900 z-50 relative overflow-hidden delay-100 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:transition-all after:hover:left-0 after:bg-rose-600 hover:delay-100 hover:text-slate-100 after:-z-10 after:rounded-r-full`}>Ver mais</button>
        </div>
    )
}

export default Card