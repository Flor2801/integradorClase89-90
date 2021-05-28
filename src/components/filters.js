import "./tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const Filters = () => {
  return <div className="filters">

<div>CATEGORY <FontAwesomeIcon icon={faChevronDown} /></div>
<div>COLOR <FontAwesomeIcon icon={faChevronDown} /></div>
<div>COLLECTION <FontAwesomeIcon icon={faChevronDown} /></div>
<div>PRICE RANGE</div>


  </div>;
};

export default Filters;
