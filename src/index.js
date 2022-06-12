import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/tipography.css';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cookies from './pages/cookies'
import PrivacityWeb from './pages/privacityWeb'
import PrivacityApp from './pages/privacityApp'
import Conditions from './pages/conditions'
import Nav from './components/Nav';
import Footer from './sections/footer';
import CookieConsent from "react-cookie-consent";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidadWeb" element={<PrivacityWeb />} />
        <Route path="/privacidadApp" element={<PrivacityApp />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/condiciones" element={<Conditions />} />
      </Routes>
      <Footer />
      <CookieConsent
        buttonText="Aceptar"
        style={{ background: "#404040" }}
        buttonStyle={{ backgroundColor: "#89C599", color: "#fff" }}
      >
        <div className='d-flex'>
          Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web. <Link to="/cookies" style={{ marginInline: '5px' }}><p className='t-green'> Más información</p> </Link>
        </div>

      </CookieConsent>
    </BrowserRouter>

  </React.StrictMode>
);


