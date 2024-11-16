import { useTranslation } from "react-i18next";

export default function Contact() {
  const [t] = useTranslation("global");

  return (
    <div id="contact" className="w-full h-screen min-h-[460px] relative flex flex-col justify-center items-center">
      <h1 className="text-4xl text-slate-900 font-bold text-center dark:text-zinc-100 before:w-52 before:h-52 before:blur-3xl before:absolute before:-right-32 before:bg-cyan-300/60 after:w-52 after:h-52 after:blur-3xl after:absolute after:top-1/2 after:-right-32 after:bg-rose-300/60">
        {t("contact")}
      </h1>
      <div className="flex flex-col justify-center items-center mt-12 gap-8">
        <a
          href="https://api.whatsapp.com/send?phone=5511960538467"
          target="blank"
        >
          <button className="bg-white text-green-700 w-72 h-12 px-5 pr-16 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shadow-2xl hover:shadow-green-700 hover:bg-green-700 hover:text-white hover:scale-105 transition-all duration-500 max-[320px]:w-52 max-[320px]:text-sm max-[320px]:pr-9 max-[320px]:gap-3">
            <i className="pi pi-whatsapp text-xl"></i>
            <p className="mr-2 mt-0.5">(11) 96053-8467</p>
          </button>
        </a>
        <a href="mailto:contato@danbueno.com" target="blank">
          <button className="bg-white text-rose-700 w-72 h-12 px-5 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shadow-2xl hover:shadow-rose-700 hover:bg-rose-700 hover:text-white hover:scale-105 transition-all duration-500 max-[320px]:w-52 max-[320px]:text-xs max-[320px]:pr-0 max-[320px]:gap-3">
            <i className="pi pi-envelope text-xl"></i>
            <p className="mr-6 ">contato@danbueno.com</p>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/danielsrbueno/" target="blank">
          <button className="bg-white text-blue-700 w-72 h-12 px-5 pr-24 flex items-center justify-between rounded-md font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-700 hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-500 max-[320px]:w-52 max-[320px]:text-sm max-[320px]:pr-14 max-[320px]:gap-3">
            <i className="pi pi-linkedin text-xl"></i>
            <p className="mr-2 mt-0.5">LinkedIn</p>
          </button>
        </a>
      </div>
    </div>
  );
}
