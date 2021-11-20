import { createContext, useEffect, useState } from "react";

export const GifContext = createContext();

export const GifProvider = ({ children }) => {
  const [mostrarAutocomplete, setAutocomplete] = useState(false);
  const [gifBuscado, setGifBuscado] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [gifSeleccionado, setGifSeleccionado] = useState("");
  const [buscar, setBuscar] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    let peticion = fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=Tj909oxjpe7pghhfRK3XdH3V3RTHKYnG&limit=15&rating=g"
    );
    peticion
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrending(data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    if (gifBuscado.length > 2) {
      setAutocomplete(true);
    } else {
      setAutocomplete(false);
    }
    let apiKey = "Tj909oxjpe7pghhfRK3XdH3V3RTHKYnG";
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${gifBuscado}`
    );
    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((res) => {
        setSugerencias(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [gifBuscado]);

  useEffect(() => {
    if (buscar) {
      let apiKey = "Tj909oxjpe7pghhfRK3XdH3V3RTHKYnG";
      let peticion = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifSeleccionado}&limit=15&offset=0&rating=g&lang=en`
      );
      peticion
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setResultados(res.data);

          if (res.data.length === 0) {
            setIsNotFound(true);
          }
          setBuscar(false);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }, [buscar, gifSeleccionado]);

  const handlerClickBuscar = (e) => {
    setBuscar(true);
    setGifSeleccionado(e.target.innerText);
    setAutocomplete(false);
  };

  const handlerClickBtn = (e) => {
    e.preventDefault();
    setBuscar(true);
    setGifSeleccionado(gifBuscado);
    setAutocomplete(false);
  };

  return (
    <GifContext.Provider
      value={{
        mostrarAutocomplete,
        sugerencias,
        setGifBuscado,
        gifBuscado,
        gifSeleccionado,
        buscar,
        resultados,
        handlerClickBuscar,
        handlerClickBtn,
        isNotFound,
        isDarkMode,
        setDarkMode,
        trending
      }}
    >
      {children}
    </GifContext.Provider>
  );
};
