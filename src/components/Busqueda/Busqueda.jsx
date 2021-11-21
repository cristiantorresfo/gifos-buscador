import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { useContext } from "react";
import { GifContext } from "../../Context/GifContext";

function Busqueda() {
  const {
    mostrarAutocomplete,
    gifBuscado,
    setGifBuscado,
    sugerencias,
    handlerClickBuscar,
    handlerClickBtn
  } = useContext(GifContext);

  return (
    <div className="busqueda">
      <p>
        ¡Inspírate y busca los mejores
        <strong> GIFS!</strong>
      </p>
      <img src="./images/ilustra_header.svg" alt="cabecera_imagen" />
      <form onSubmit={handlerClickBtn}>
        <div className="barraBusqueda">
          <input
            className={mostrarAutocomplete ? "inputAC" : "inputBusqueda"}
            type="text"
            value={gifBuscado}
            placeholder="Buscar Gif"
            onChange={(e) => {
              setGifBuscado(e.target.value);
            }}
          />
          <button className={mostrarAutocomplete ? "btnAC" : "btnBusqueda"}>
            <BsSearch />
          </button>
        </div>
      </form>
      {mostrarAutocomplete ? (
        <div className="autocomplete">
          {sugerencias.map((sugerencia,i) => {
            return (
              <p key={i} onClick={handlerClickBuscar}>
                {" "}
                <AiOutlineSearch /> {sugerencia.name}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
export default Busqueda;
