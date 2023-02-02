import React from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <div className="infos text-sm text-center ml-3 mr-3 font-mono">
          <p>
            Bienvenue sur ChemicalDreams, ici, vous trouverez des informations
            sur les drogues et les médicaments. Nous sommes là pour vous fournir
            des informations fiables et à jour sur les différents types de
            substances psychoactives et les médicaments utilisés pour traiter
            les troubles liés à ces substances. Nous croyons en la
            sensibilisation aux risques associés à l'utilisation de ces
            substances et à leur impact sur la santé. Consultez notre site pour
            en savoir plus sur les différentes drogues et médicaments.
          </p>
        </div>
        <div className="info_tile" />
        <span>
          <p className="rounded-lg border-blue-400 h-32 w-50 p-4 border-2 mt-6 ml-4 mr-4">
            Article 1
          </p>
          <p className="rounded-lg border-blue-400 h-32 w-50 p-4 border-2 mt-6 ml-4 mr-4">
            Article 2
          </p>
          <p className="rounded-lg border-blue-400 h-32 w-50 p-4 border-2 mt-6 ml-4 mr-4">
            Article 3
          </p>
        </span>
      </main>
    </div>
  );
}
