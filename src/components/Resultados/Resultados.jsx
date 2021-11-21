import { useContext } from "react";
import { GifContext } from "../../Context/GifContext";
import Trending from "./Trending/Trending";
import GifCard from "./GifCard/GifCard";
import NotFound from "./NotFound/NotFound";

function Resultados() {
  const { resultados, buscar, isNotFound, trending } = useContext(GifContext);

  return (
    <div className="resultados">
      {buscar ? (
        <div className="conteneur_general_load_9" align="center">
          <div className="loader_9"></div>
        </div>
      ) : null}
      {isNotFound && resultados.length === 0 ? (
        <NotFound />
      ) : resultados.length === 0 && trending.length > 0 ? (
        <Trending />
      ) : (
        <GifCard />
      )}
    </div>
  );
}
export default Resultados;
