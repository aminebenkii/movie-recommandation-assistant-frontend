// src/pages/InitLangPage.tsx

import { useNavigate } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { Clapperboard } from "lucide-react"

export default function InitLangPage() {
  const { setLang } = useLanguage()
  const navigate = useNavigate()

  const chooseLanguage = (lang: "en" | "fr") => {
    setLang(lang)
    navigate("/intro")
  }

  return (
    <div className="h-dvh w-full flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-800 px-6">
      <div className="max-w-md w-full flex flex-col items-center gap-10 text-center font-[Manrope] animate-fade-in">
        <div className="flex flex-col items-center gap-3">
          <div className="p-4 bg-white shadow-lg rounded-2xl">
            <Clapperboard className="h-12 w-12 sm:h-16 sm:w-16 text-amber-500 drop-shadow-lg" />
          </div>
          <h1 className="p-2 pt-4 text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-xl">
            MoviesYouDidntWatch
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
          Find <span className="text-amber-700 font-semibold">great movie suggestions</span> — in seconds.
        </p>

        <div className="w-full">
          <p className="text-sm text-gray-500 mb-4">Choose your language to begin</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => chooseLanguage("en")}
              className="px-6 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-full text-sm font-semibold shadow-md transition-all"
            >
              English
            </button>
            <button
              onClick={() => chooseLanguage("fr")}
              className="px-6 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-full text-sm font-semibold shadow-md transition-all"
            >
              Français
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
