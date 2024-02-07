import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import PutApi from "../Products/PutApi";
import { useContext } from "react";
import { CartContext } from "../App";

function Building() {
	const {itemsInCart, setItemsInCart} = useContext(CartContext);
  console.log(itemsInCart)
	const handleClick = async () => {
		try {
      for (const element of itemsInCart) {
        let newStock = element.stock - element.amountOfProducts
        const id = element.id
        if (newStock <=0) {
          newStock = 0
        }
        console.log(newStock)
        console.log(id)
        await PutApi(id, newStock);

      }
      setItemsInCart([])
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<Header />
			<h1>building page</h1>
			<button onClick={handleClick}>Click me</button>
			<Footer />
		</>
	);
}

export default Building;
