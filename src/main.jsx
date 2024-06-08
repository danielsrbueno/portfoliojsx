import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'primeicons/primeicons.css'
import './index.css'
import en from "../src/assets/lang/en.json"
import pt from "../src/assets/lang/pt.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'


i18next.init({
  interpolation: {escapeValue: false},
  lng: "pt",
  resources: {
    pt: {
      global: pt
    },
    en: {
      global: en
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
