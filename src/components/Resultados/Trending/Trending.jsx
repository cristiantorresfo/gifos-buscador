import { useContext } from "react";
import { GifContext } from "../../../Context/GifContext";

function Trending() {
  const { trending } = useContext(GifContext);
  console.log(trending);
  return (
    <div className="gifCard">
      <h3>Trending Gifs</h3>
      <div>
        {trending.map((gif) => {
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
export default Trending;
