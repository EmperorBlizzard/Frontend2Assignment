import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import { useContext } from "react";
import { CartContext } from "../App";
import ProductCartCheckout from "../components/sections/checkoutPage/sections/ProductCardCheckout"

function Building() {
  const Name = useContext(CartContext);
  const NameList = Name.itemsInCart
  console.log(NameList);

  const Mapping = () => {
	return NameList.map((namn) => (
	  <div key={namn.id}>
		<ProductCartCheckout card = {namn}/>
	  </div>
	));
  }
  
  

  return (
    <>
      <Header />
      <h1>building page</h1>
      <Mapping/>
      
      <Footer />
    </>
  );
}

export default Building;
