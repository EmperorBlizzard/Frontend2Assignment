import { useParams } from "react-router-dom";
import Product from "../../../../Products/Products.json"

function Slider() {
    const {id} = useParams();
    const bikeImage = "/" + Product.products[id-1].image
    return ( <>
    <img src={bikeImage} alt="Här skall de vara en bild" /> 
    </>
    );
}

export default Slider;