import logo from "../assets/logo.svg";
import "./Cabecalho.css";
import windowns from "../assets/windows-branco.svg";
import {Link} from 'react-router-dom'

const Cabecalho = () => {
  return (
    <div id="header">
      <img id="logo" src={logo} alt="img_Logo_Ayla_Bot" />
      <Link id="bttwin" to="/Tutorial">
        <object type="image/svg+xml" data={windowns} id="win"></object>
        WINDOWS
      </Link>
    </div>
  );
};

export default Cabecalho;
