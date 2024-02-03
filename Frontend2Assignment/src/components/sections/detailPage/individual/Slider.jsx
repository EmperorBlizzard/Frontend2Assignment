import { DetailContext } from "../Sections/ProductDetailContent";
import { useContext } from "react";

const Slider = () => {
    const shareValue = useContext(DetailContext)
    const imgLink = `${import.meta.env.VITE_STRAPI_URL}${shareValue.attributes.image.data.attributes.url}`
	const img = imgLink.replace("/api/", "")
    return ( <>
    <img src={img} alt="Här skall de vara en bild" /> 
    </>
    );
}

export default Slider;