import { useState, useEffect } from "react";
export const useFetch = (url) => {
  //? Almacena los datos que trae de la peticion
  const [data, setData] = useState(null);
  //? Almacena el estado si esta pendiete aun la petiocion o ya no lo esta
  const [isPending, setIsPending] = useState(true);
  //? Por si la peticion nos trae un error
  const [error, setError] = useState(null);
  useEffect(() => {
    const getDataApi = async (url) => {
      try {
        const response = await fetch(url);
        //? Por si ha pasado un error genereramos un Objeto de erro para que el Catch lo reciba
        if (!response.ok) {
          throw {
            error: true,
            status: response.status,
            statusText: response.statusText || "Ocurrio un error",
          };
        }
        let data = await response.json();
        setIsPending(false);
        setData(data);
        setError({ error: false });
      } catch (error) {
        setIsPending(true);
        setError(error);
      }
    };
    getDataApi(url);
  }, [url]);

  return { data, isPending, error };
};
