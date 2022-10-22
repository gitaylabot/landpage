import {Link} from 'react-router-dom'
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="nav">
      <div id="container">
        <Link to='/'>Home</Link>
        <Link to='/'>Serviços</Link>
        <Link to='/About'>Sobre</Link>
        <Link to='/Contact'>Contato</Link>
      </div>
    </div>
  );
};

export default NavBar;
