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
            <a href={gif.url}>
              {" "}
              <img
                src={gif.images.downsized_medium.url}
                alt="gif"
                key={gif.id}
              />{" "}
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default GifCard;
