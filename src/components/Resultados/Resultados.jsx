import { useContext } from "react";
import { GifContext } from "../../Context/GifContext";
import Trending from "./Trending/Trending";
import GifCard from "./GifCard/GifCard";
import NotFound from "./NotFound/NotFound";
import Loader from "./Loader/Loader";

function Resultados() {
  const { resultados, buscar, isNotFound, trending } = useContext(GifContext);

  return (
    <div className="resultados">
      {buscar ? <Loader /> : null}
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
