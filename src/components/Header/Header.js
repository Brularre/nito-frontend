// Imports
import mainLogo from '../../images/Logo-White.png';

// Components
import NavBar from '../Navbar/Navbar';

// Styles
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <img src={mainLogo} alt="Logo de Nito" className="header__logo" />
      <NavBar />
    </header>
  );
}
