import { useContext } from "react";
import { GifContext } from "../../Context/GifContext";

function Header() {
  const { isDarkMode, setDarkMode } = useContext(GifContext);

  const handleChangeTheme = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <div className="header">
      {isDarkMode ? (
        <img src="./images/logo-mobile-modo-noct.svg" alt="logo-dark" />
      ) : (
        <img src="./images/logo-desktop.svg" alt="logo.light" />
      )}
      <button className="btnTheme" onClick={handleChangeTheme}>
        {isDarkMode ? "MODO LIGHT" : "MODO DARK"}
      </button>
    </div>
  );
}
export default Header;
