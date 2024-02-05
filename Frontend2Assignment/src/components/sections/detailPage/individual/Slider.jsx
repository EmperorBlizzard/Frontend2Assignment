import { DetailContext } from "../Sections/ProductDetailContent";
import { useContext } from "react";

const Slider = () => {
    const {dispImage} = useContext(DetailContext)
    return ( <>
    <img src={dispImage} alt="Här skall de vara en bild" /> 
    </>
    );
}

export default Slider;