export default function Contact() {
  return (
    <div id="contact" className="w-full h-3/6 my-20 relative">
      <h1 className="text-4xl text-slate-900 font-bold text-center dark:text-zinc-100">
        Contato
      </h1>
      <div className="flex flex-col justify-center items-center mt-12 gap-4">
        <a
          href="https://api.whatsapp.com/send?phone=5511960538467"
          target="blank"
        >
          <button className="bg-white text-green-700 w-72 h-12 px-5 pr-16 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shedow-2xl hover:shadow-green-700 hover:bg-green-700 hover:text-white hover:scale-105 transition-all duration-500 max-[320px]:w-52 max-[320px]:text-sm max-[320px]:pr-9 max-[320px]:gap-3">
            <i className="pi pi-whatsapp text-xl"></i>
            <p className="mr-2 mt-0.5">(11) 96053-8467</p>
          </button>
        </a>
        <a href="mailto:danielsrbueno@gmail.com" target="blank">
          <button className="bg-white text-rose-700 w-72 h-12 px-5 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shedow-2xl hover:shadow-rose-700 hover:bg-rose-700 hover:text-white hover:scale-105 transition-all duration-500 max-[320px]:w-52 max-[320px]:text-xs max-[320px]:pr-0 max-[320px]:gap-3">
            <i className="pi pi-envelope text-xl"></i>
            <p className="mr-2 mt-0.5">danielsrbueno@gmail.com</p>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/danielsrbueno/" target="blank">
          <button className="bg-white text-blue-700 w-72 h-12 px-5 pr-24 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shedow-2xl hover:shadow-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-500 max-[320px]:w-52 max-[320px]:text-sm max-[320px]:pr-14 max-[320px]:gap-3">
            <i className="pi pi-linkedin text-xl"></i>
            <p className="mr-2 mt-0.5">LinkedIn</p>
          </button>
        </a>
      </div>
    </div>
  );
}
