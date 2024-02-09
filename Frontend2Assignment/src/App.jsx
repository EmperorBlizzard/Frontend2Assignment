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
import EmailTestPage from "./Pages/EmailTestPage";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderConfirmation from "./components/sections/checkoutPage/sections/OrderConfirmation";

export const CartContext = createContext(null);

function App() {
	const [itemsInCart, setItemsInCart] = useState([]);
	const [addCart, setAddCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		if (Object.keys(addCart).length !== 0) {
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
					amountOfProducts: addCart.amountOfProducts || 1,
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
			if (itemsInCart.length >= 1) {
				const last = itemsInCart.length - 1;
				notify("Till varukorg: " + itemsInCart[last].productName);
			}
			let total = 0;
			itemsInCart.forEach((item) => {
				total += item.price * item.amountOfProducts;
			});
			setTotalPrice(total);
		};
		calculateTotalPrice();
	}),	[itemsInCart];

	const notify = (mess) => toast(mess);
	// Funktion för att öka antalet produkter i varukorgen
	const increaseQuantity = (productId) => {
		const updatedList = [...itemsInCart];
		const itemIndex = updatedList.findIndex((item) => item.id === productId);
		if (itemIndex !== -1) {
			updatedList[itemIndex].amountOfProducts += 1;
			if (
				updatedList[itemIndex].amountOfProducts > updatedList[itemIndex].stock
			) {
				alert("för många mot lager");
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
		if (itemIndex !== -1 && updatedList[itemIndex].amountOfProducts >= 1) {
			updatedList[itemIndex].amountOfProducts -= 1;
			setItemsInCart(updatedList);
		}
	};

	const deleteProductFromCart = (productId) => {
		const upDatedList = [...itemsInCart];
		const itemIndex = upDatedList.findIndex((item) => item.id === productId);
		if (itemIndex !== -1) {
			upDatedList.splice(itemIndex, 1);
			setItemsInCart(upDatedList);
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
				addCart,
				deleteProductFromCart,
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
					<Route path="/emailtestpage" element={<EmailTestPage/>} />
					<Route path="orderconfirmation" element={<OrderConfirmation/>} />
					
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</CartContext.Provider>
	);
}

export default App;
