import { useContext } from "react";
import { GifContext } from "../../../Context/GifContext";

function Trending() {
  const { trending } = useContext(GifContext);
  return (
    <div className="gifCard">
      <h3>Trending Gifs</h3>
      <div>
        {trending.map((gif) => {
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
export default Trending;
