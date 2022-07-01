import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import {
  Analytics,
  BankovniZaruky,
  EvidenceSmluvnichSubjektu,
  ExportyCsuMts,
  Konsignace,
  Kos,
  Login,
  Nabidky,
  NastaveniAplikace,
  PohledavkyVProdleniInsolvence,
  Pojisteni,
  RizenaDokumentace,
  Smlouvy,
  StavebniZakazky,
  VnitropodnikoveObjednavky,
} from './components';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback="Loading ...">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/dashboard" element={<Analytics />} />
            <Route path="login" element={<Login />} />
            <Route path="stavebni-zakazky" element={<StavebniZakazky />} />
            <Route path="bankovni-zaruky" element={<BankovniZaruky />} />
            <Route path="evidence-smluvnich-subjektu" element={<EvidenceSmluvnichSubjektu />} />
            <Route path="exporty-csu-mts" element={<ExportyCsuMts />} />
            <Route path="konsignace" element={<Konsignace />} />
            <Route path="nabidky" element={<Nabidky />} />
            <Route path="pohledavky-v-prodleni-insolvence" element={<PohledavkyVProdleniInsolvence />} />
            <Route path="login" element={<Pojisteni />} />
            <Route path="rizena-dokumentace" element={<RizenaDokumentace />} />
            <Route path="smlouvy" element={<Smlouvy />} />
            <Route path="pojisteni" element={<Pojisteni />} />
            <Route path="kos" element={<Kos />} />
            <Route path="nastaveni-aplikace" element={<NastaveniAplikace />} />
            <Route path="vnitropodnikove-objednavky" element={<VnitropodnikoveObjednavky />} />
          </Route>
          {/* <Route path="/index.html" element={<App />} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
