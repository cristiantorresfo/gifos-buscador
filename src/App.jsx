import { useContext } from "react";
import Busqueda from "./components/Busqueda/Busqueda";
import Header from "./components/Header/Header";
import Resultados from "./components/Resultados/Resultados";
import { GifContext } from "./Context/GifContext";

import "./styles.css";

export default function App() {
  const { isDarkMode } = useContext(GifContext);

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      {/* {isDarkMode
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark")} */}
      <Header />
      <Busqueda />
      <Resultados />
    </div>
  );
}
