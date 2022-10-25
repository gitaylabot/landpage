import Cabecalho from "../components/Cabecalho";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Cabecalho />
      <div id="Contatos">
        <div id="Contatostxt">
          <h1>
            Entre já em contato
            <br />
            com nosso suporte e agende um teste
          </h1>
          <p>
            Nosso suporte está disponível das 8:00 ás 18:00 de seg a sex <br />
            via whats app.
          </p>
        </div>
        <div id="ContatosBttn">
          <p>Email: faleaylabot@gmail.com</p>
          <div>
            <a href=".">Whatsapp</a>
          </div>
        </div>
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Contact;
