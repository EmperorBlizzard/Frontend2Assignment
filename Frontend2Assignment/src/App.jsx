import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/Global.css";
import StartPage from "./Pages/StartPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ListingPage from "./Pages/ListingPage";
import CheckoutPage from "./Pages/CheckoutPage";
import CartPage from "./Pages/CartPage";
import BuildingPageToBeDeleted from "./Pages/BuildingPageToBeDeleted";
import ContactPage from "./Pages/ContactPage";
import ReturnPage from "./Pages/ReturnPage";
import DeliveryPage from "./Pages/DeliveryPage";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage";
import AboutPage from "./Pages/AboutPage";
import SearchPage from "./Pages/SearchPage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function App() {
	const [itemsInCart, setItemsInCart] = useState([]);
	const [addCart, setAddCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		if (Object.keys(addCart).length !== 0) {
			console.log(addCart)
			const itemIndex = itemsInCart.findIndex((item) => item.id === addCart.id);
			if (itemIndex !== -1) {
				const upDatedList = [...itemsInCart];
				upDatedList[itemIndex].amountOfProducts += 1;
				setItemsInCart(upDatedList);
			} else {
				const item = {
					id: addCart.id,
					productName: addCart.attributes.productName,
					price: addCart.attributes.price,
					amountOfProducts: 1,
					stock: addCart.attributes.stock,
					image: addCart.attributes.image.data.attributes.url,
				};
				const upDatedList = [...itemsInCart, item];
				setItemsInCart(upDatedList);
			}
			setAddCart("");
		}
	}, [addCart, itemsInCart]);

	useEffect(() => {
		const calculateTotalPrice = () => {
			let total = 0;
			itemsInCart.forEach((item) => {
				total += item.price * item.amountOfProducts;
			});
			setTotalPrice(total)
		}
		calculateTotalPrice();
	}), [itemsInCart]

	// Funktion för att öka antalet produkter i varukorgen
	const increaseQuantity = (productId) => {
		const updatedList = [...itemsInCart];
		const itemIndex = updatedList.findIndex((item) => item.id === productId);
		if (itemIndex !== -1) {
			updatedList[itemIndex].amountOfProducts += 1;
			if (updatedList[itemIndex].amountOfProducts > updatedList[itemIndex].stock ) {
				alert("för många mot lager")
			} else {
				setItemsInCart(updatedList);
			}
		} else {
			alert(
				"Det finns ingen produkt i varukorg, vänligen lägg till i varukorgen först"
			);
		}
	};

	// Funktion för att minska antalet produkter i varukorgen
	const decreaseQuantity = (productId) => {
		const updatedList = [...itemsInCart];
		const itemIndex = updatedList.findIndex((item) => item.id === productId);
		if (itemIndex !== -1 && updatedList[itemIndex].amountOfProducts > 1) {
			updatedList[itemIndex].amountOfProducts -= 1;
			setItemsInCart(updatedList);
		}
	};

	return (
		<CartContext.Provider
			key={itemsInCart}
			value={{
				itemsInCart,
				setItemsInCart,
				setAddCart,
				increaseQuantity,
				decreaseQuantity,
				totalPrice,
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<StartPage />} />
					<Route
						path="/productdetailpage/:id"
						element={<ProductDetailPage />}
					/>
					<Route path="/listingpage" element={<ListingPage />} />
					<Route path="/checkoutpage" element={<CheckoutPage />} />
					<Route path="/cartpage" element={<CartPage />} />
					<Route
						path="/buildingpagetobedeleted"
						element={<BuildingPageToBeDeleted />}
					/>
					<Route path="/contactpage" element={<ContactPage />} />
					<Route path="/returnpage" element={<ReturnPage />} />
					<Route path="/deliverypage" element={<DeliveryPage />} />
					<Route
						path="/termsandconditionspage"
						element={<TermsAndConditionsPage />}
					/>
					<Route path="/aboutpage" element={<AboutPage />} />
					<Route path="/searchpage" element={<SearchPage />} />
				</Routes>
			</BrowserRouter>
		</CartContext.Provider>
	);
}

export default App;
