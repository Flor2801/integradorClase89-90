// import React from 'react'
import "./index.css";
import "./App.scss";
import Card from "./components/tarjeta";
import Filters from "./components/filters";
// import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Search from "./components/search"
import React, { useState } from 'react'



// const [cardSelected, setCardSelected] = useState(products)

// const filtrar = (productos) => {
//   setFiltro([...products].filter(elementos => elementos === ""))
// }

const App = () => {

  
const products = [
  {
    title: 'Coombes',
    type: "Lounge",
    price: 2600,
    rating: 1,
    img: 'https://i.imgur.com/ZAxMGG5.png',
    isAvailable: false,
    onSale: true,
  },
  {
    title: 'Keeve Set',
    type: "Table & Chairs",
    price: 590,
    rating: 2,
    img: 'https://i.imgur.com/tT8sFIs.jpeg',
    isAvailable: false,
    onSale: false,
  },
  {
    title: 'Nillè', 
    type: "Armchair",
    price: 950,
    rating: 5,
    img: 'https://i.imgur.com/Vx1cZY0.png', 
    isAvailable: false,
    onSale: true,
  },
  {
    title: 'Blanko', 
    type: "Side table",
    price: 90,
    rating: 4,
    img: 'https://i.imgur.com/N1Bf4ox.jpg',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Momo', 
    type: "Shelves",
    price: 890,
    rating: 3,
    img: 'https://i.imgur.com/AlKxDE4.jpeg', 
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Penemillè', 
    type: "Chair",
    price: 120,
    rating: 4,
    img: 'https://i.imgur.com/pmANPjN.jpeg',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Kappu', 
    type: "Shelves",
    price: 420,
    rating: 4,
    img: 'https://i.imgur.com/s2rsPa1.jpg',
    isAvailable: true,
    onSale: false,
  },
];


const [arrayFiltrado, setNuevoArray] = useState(products)

const buscar = (param) => {
  console.log("PROBANDO BUSQUEDA")
  let nuevoFiltrado = products.filter(products => products.title.includes(param) || products.type.includes(param)) 
  arrayFiltrado = nuevoFiltrado
  setNuevoArray(arrayFiltrado)
} 


  return (
    <div className="container">
      <div className="nav-bar"> <FontAwesomeIcon icon={faBars} /> HOME SHOP MAGAZINE  <FontAwesomeIcon icon={faShoppingCart} /> LOGIN</div>
      <div className="search">
        <Search buscar={buscar}/>
               <div>
        <FontAwesomeIcon icon={faSearch} /> <input type="search"></input>
        </div>
      </div>
      <div className="card-container">
        <Filters />

        {products.map((producto) => {
          return (
            <Card
              title={producto.title}
              type={producto.type}
              price={producto.price}
              img={producto.img}
              isAvailable={producto.isAvailable}
              onSale={producto.onSale}
              rating={producto.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
