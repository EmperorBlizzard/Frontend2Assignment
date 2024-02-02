import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import { useContext } from "react";
import { CartContext } from "../App";

function Building() {
  const Name = useContext(CartContext);
  const NameList = Name.itemsInCart
  console.log(NameList);

  const Mapping = () => {
	return NameList.map((namn) => (
	  <div key={namn.id}>
		<p>{namn.productName}</p>
		<p>{namn.price}</p>
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
