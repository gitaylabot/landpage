import logo from "../assets/logo.svg";
import "./Cabecalho.css";
import windowns from "../assets/windows.svg";

const Cabecalho = () => {
  return (
    <div id="header">
      <img id="logo" src={logo} alt="img_Logo_Ayla_Bot" />
      <a id="bttwin">
        <img id="win" src={windowns} alt="." />
        WINDOWS
      </a>
    </div>
  );
};

export default Cabecalho;
