import menuImg from "./images/menu-top-xs.png";
import ironhackLogo from "./images/ironhack-logo-xs.png";

function Navbar() {
  return (
   <nav>
       <img className="logo" src={ironhackLogo} alt="ironhackLogo"></img>
       <img className="menu" src={menuImg} alt="menuTop"></img>
   </nav>
  );
}

export default Navbar;
