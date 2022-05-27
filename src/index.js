import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/tipography.css';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cookies from './sections/cookies'
import Privacity from './sections/privacity'
import Nav from './components/Nav';
import CookieConsent from "react-cookie-consent";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacidad" element={<Privacity />} />
      </Routes>
      <CookieConsent
        buttonText="Aceptar"
      >
        Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web. <Link to="/cookies">Más información</Link>
      </CookieConsent>
    </BrowserRouter>

  </React.StrictMode>
);


