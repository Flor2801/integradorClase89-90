
import "./tarjeta.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, type, price, img, isAvailable, onSale, rating }) => {
 
// const disponible = (isAvailable === true ? "imagen-producto"  : "no disponible")

  return (
    <div>
      
    <article className="estilo">
      <div className="imagen-producto">
        <img src={img}></img>
      </div>
      <div className="descripcion-producto">
        <div className="title">
          <h4>{title}{onSale === true && <span>  ON SALE! </span>}</h4> 
          <h4>{type}</h4>
        
         
          {rating >= 1 ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}
          {rating >= 2 ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}
          {rating >= 3 ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}
          {rating >= 4 ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}
          {rating === 5 ?  <FontAwesomeIcon icon={faStar} />   :   <FontAwesomeIcon icon={fasStar} />}

        </div>
        <div className="price">
          <h4>$ {price}</h4>
          <FontAwesomeIcon icon={faShoppingCart} />
       

        </div>
      </div>
    </article>
    </div>
  );
};

export default Card;
