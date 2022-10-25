import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import "./Services.css";
const Services = () => {
  return (
    <div>
      <Cabecalho />
      <div id="valores">
        <div id="valorestxt">
          <h1>
            <span>Preço Acessível</span>
          </h1>
          <h4>
            Solicite seu teste gratuito por 15 dias da Ayla Bot WhatsApp. Oferta
            exclusiva para empresas que enviam mais de 10.000 mensagens por
            mês.
          </h4>
          <h2>20% de Desconto.</h2>
        </div>
        <div id="valorescard">
          <div className="cardBlack">
            <h3 className="valorCardBlack">TESTE GRÁTIS</h3>
            <div className="vantagens">
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✖️Cobrança automática</p>
            </div>
            <h4>R$0,00</h4>
          </div>
          <div className="cardWhite">
          <h3 className="valorCarWhite">Plano Semestral</h3>
            <div className="vantagens">
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✖️Cobrança automática</p>
            </div>
            <h4>R$0,00</h4>
          </div>
          <div className="cardBlack">
          <h3 className="valorCardBlack">Plano Anual</h3>
            <div className="vantagens">
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✔️Displaro em massa</p>
              <p>✖️Cobrança automática</p>
            </div>
            <h4>R$0,00</h4>
          </div>
        </div>
      </div>
      <NavBar/>
      <Footer />
    </div>
  );
};

export default Services;
