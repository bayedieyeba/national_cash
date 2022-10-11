import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icon-css/css/flag-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs :["en","fr","ar"],
    //lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "fr",
    detection:{
      order:['cookie','htmlTag','localStorage','path','subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: 'http://localhost:4000/langue/{{lng}}/translation.json'
    },
    

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
);

