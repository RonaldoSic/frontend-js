import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFetch } from "@hooks/useFetch";
const ProductItem = () => {
  /* 
  // const router = useRouter();
    // <h2>
        // Este es la pagina de productos y buscas el producto {router.query.id}
      // </h2> 
  */
  const {
    query: { id },
  } = useRouter();
  let URL = `http://localhost:3000/api/avo/${id}`;
  const { data, isPendig, error } = useFetch(URL);
  const [product, setProduct] = useState(null);
  let varNull = null;
  useEffect(() => {
    if (data !== null) {
      setProduct(data);
    }
  }, [data]);

  return (
    <div>
      <h3>Seccion de {id}</h3>
      <p>{JSON.stringify({ data })}</p>
      {console.log(product)}
    </div>
  );
};

export default ProductItem;
