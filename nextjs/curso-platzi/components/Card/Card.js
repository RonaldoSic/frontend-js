import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useFetch } from "@hooks/useFetch";
import style from "./card.module.css";

let URL = `api/avo`;  
const getAllProduct = ({ name, id, price, image }) => {
  return (
    <Link href={`/product/${id}/`} key={id}>
      <div className={style.card}>
        <div className={style.card__cover}>
          <img className={style.card__img} src={image} alt={name} />
        </div>
        <div className={style.card__footer}>
          <h2 className={style.card__footer_title}>{name}</h2>
          <h3 className={style.card__footer_price}>{price}</h3>
          {/* <p className={style.card__footer_description}>{description}</p>
        <span className={style.card__footer_shape}>{shape}</span>
        <span className={style.card__footer_taste}>{taste}</span> */}
        </div>
      </div>
    </Link>
  );
};
const Card = () => {
  const { data, isPendig, error } = useFetch(URL);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    if (data != null) {
      setProductList(data.data);
    }
    /* 
    async function postData(url = "") {
      // Opciones por defecto estan marcadas con un *
      const response = await fetch(url);
      return response.json(); // parses JSON response into native JavaScript objects
    }
    const userData = {
      usernameOrEmail: "cvasquez",
      password: "password",
    };
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
    const url1 = "https://services-utatlan.herokuapp.com/v2/api-docs";
    const url2 = "https://services-utatlan.herokuapp.com/api/auth/signin";
    postData(url1).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    }); 
    */
  }, [data]);
  return (
    <div className={style.card__layout}>
      {productList.length != 0 ? (
        productList.map((producto) => getAllProduct(producto))
      ) : (
        <h4>Cargando...</h4>
      )}
    </div>
  );
};
export default Card;
