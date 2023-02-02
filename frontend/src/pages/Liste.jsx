import React from "react";
import NavBar from "../components/NavBar";
import "./Liste.css";

function Liste() {
  return (
    <div>
      <NavBar />
      <ul className="cards">
        <li>
          <a href="/liste/drogue/cannabis" className="card">
            <img
              src="src/assets/illustrations/illustration-1.png"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="src/assets/chemicald-cannabis.svg"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Cannabis</h3>
                </div>
              </div>
              <p className="card__description">
                Le cannabis est une plante de la famille des Cannabaceae,
                utilisée principalement pour ses propriétés psychoactives.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="/liste/drogue/lsd" className="card">
            <img
              src="src/assets/illustrations/illustration-2.png"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="src/assets/chemicald-lsd.svg"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">LSD</h3>
                </div>
              </div>
              <p className="card__description">
                Le LSD est un psychotrope souvent consommé sous forme de petits
                morceaux de papier imprégnés de la substance.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="/liste/drogue/mdma" className="card">
            <img
              src="src/assets/illustrations/illustration-5.png"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="src/assets/ChemicalD-MDMA.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">MDMA</h3>
                </div>
              </div>
              <p className="card__description">
                La MDMA est une substance psychoactive de la famille des
                amphétamines.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="/liste/drogue/opiaces" className="card">
            <img
              src="src/assets/illustrations/illustration-8.png"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="src/assets/chemicald-opiaces.svg"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Opiacés</h3>
                </div>
              </div>
              <p className="card__description">
                Les opiacés sont utilisés pour traiter la douleur et peuvent
                également produire un état de relaxation et de plénitude.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="/liste/drogue/ketamine" className="card">
            <img
              src="src/assets/illustrations/illustration-7.png"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="src/assets/ChemicalD-Ketamine.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Kétamine</h3>
                </div>
              </div>
              <p className="card__description">
                Le LSD est un psychotrope souvent consommé sous forme de petits
                morceaux de papier imprégnés de la substance.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Liste;
