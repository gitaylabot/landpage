import { Link } from "react-router-dom";
import Home from "../pages/Home";
import logo from "../assets/logo.svg";

import botwpp from '../assets/bot-wapp.webp'

import Footer from "../components/Footer";

import "./Tutorial.css";

const Tutorial = () => {
  return (
    <div>
      <div id="cabecalho">
        <Link id="bttnVoltar" to="/" element={<Home />}>
          <span>Voltar</span>
        </Link>
        <div>
          <img id="logo" src={logo} alt="img_logo_Ayla_bot"></img>
        </div>
      </div>


      <div id="Download">
        <div id="text">
          <h1>
            Baixe já
            <br />e garanta 15 dias <span>Grátis</span>
          </h1>
          <p>
            Para fazer o Download do programa basta clicar no icone abaixo
            <br />e entrar em contato com nosso suporte para liberação dos periodo
            gratuito.
          </p>
          <div id="bttnsDownload">
            <a href=".">Windowns</a>
            <a href=".">Suporte</a>
          </div>
        </div>

        <div id="imgDownload">
            <img src={botwpp}></img>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Tutorial;
