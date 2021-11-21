import { useContext } from "react";
import { GifContext } from "../../../Context/GifContext";

function GifCard() {
  const { resultados } = useContext(GifContext);

  return (
    <div className="gifCard">
      <h3>Resultados de tu búsqueda</h3>
      <div>
        {resultados.map((gif) => {
          return (
            <a href={gif.url} key={gif.id}>
              <img
                className="gifImg"
                src={gif.images.downsized_medium.url}
                alt="gif"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default GifCard;
