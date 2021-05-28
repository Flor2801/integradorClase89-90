import "./tarjeta.css";
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const Search = (buscar) => {

const busqueda = (evento) => {
 buscar(evento.target.value)
}

  return (
    <div className="search">
      <div>
        <FontAwesomeIcon icon={faSearch}/> <input onChange={busqueda} type="search" placeholder="ingrese búsqueda" ></input>
      </div>
    </div>
  );
};

export default Search;
