import { useTranslation } from "react-i18next";

function Footer() {
    const [t] = useTranslation("global");

    return (
        <div className="w-full h-12 flex px-3 items-center justify-between bg-slate-200 dark:bg-zinc-800 text-sm text-slate-600 dark:text-zinc-400 select-none">
            <p>{t("footer.text1")}</p>
            <p>{t("footer.text2")}</p>
        </div>
    )
}

export default Footer