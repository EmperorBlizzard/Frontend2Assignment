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
import Payment from "./Payment/Payment";
import Completion from "./Payment/Completion";
import Success from "./Payment/success";
import Cancel from "./Payment/cancel";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const CartContext = createContext(null);



function App() {
	const priceId = (id) => {
		let option = id;
		let price;
		switch(option){
			case 1:
				price = "price_1OiHBvDOLAe1Mz18A2p27pDa"
				return price;
			case 2:
				price = "price_1OiHL7DOLAe1Mz189d2UWtVi"
				return price;
			case 3:
				price = "price_1OiHNtDOLAe1Mz18eaWrN4ZK"
				return price;
			case 4:
				price = "price_1OiHOODOLAe1Mz18ua3XIIuT"
				return price;
			case 5:
				price = "price_1OiHPADOLAe1Mz18bG6Zzeaj"
				return price;
			case 6:
				price = "price_1OiHR8DOLAe1Mz18cGHq8c1z"
				return price;
			case 7:
				price = "price_1OiHRcDOLAe1Mz18NFoZQUr6"
				return price;
			case 8:
				price = "price_1OiHS8DOLAe1Mz18xhXnbDWG"
				return price;
			case 9:
				price = "price_1OiHSaDOLAe1Mz185TWZMVnC"
				return price;
			case 10:
				price = "price_1OiHTADOLAe1Mz18F3J7RSTI"
				return price;
			case 11:
				price = "price_1OiHWaDOLAe1Mz18Q0kfWBBf"
				return price;
			case 12:
				price = "price_1OiHXjDOLAe1Mz18iky4F9I7"
				return price;
			case 13:
				price = "price_1OiHZDDOLAe1Mz18umWKDYme"
				return price;
			case 14:
				price = "price_1OiHZeDOLAe1Mz189iohx1CR"
				return price;
			case 15:
				price = "price_1OiHaTDOLAe1Mz18PdN3U6dn"
				return price;
			case 16:
				price = "price_1OiHb0DOLAe1Mz18KyskVp5S"
				return price;
			case 17:
				price = "price_1OiHbZDOLAe1Mz18jEiRebrq"
				return price;
			case 18:
				price = "price_1OiHcADOLAe1Mz18XIJnBAl9"
				return price;
			case 19:
				price = "price_1OiHcsDOLAe1Mz18QFOd5ZW9"
				return price;
			case 20:
				price = "price_1OiHdHDOLAe1Mz18zmjoUWvJ"
				return price;
			case 21:
				price = "price_1OiHeHDOLAe1Mz185LsCCey5"
				return price;
			case 22:
				price = "price_1OiHelDOLAe1Mz18JIxtZnDo"
				return price;
			case 23:
				price = "price_1OiHfIDOLAe1Mz18Jwq26VJi"
				return price;
		}
	}
	
	const [itemsInCart, setItemsInCart] = useState([]);
	const [addCart, setAddCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [cartProducts, setCartProducts] = useState([]);
	const items = cartProducts;

	useEffect(() => {
		if (Object.keys(addCart).length !== 0) {
			const itemIndex = itemsInCart.findIndex((item) => item.id === addCart.id);

			if (itemIndex !== -1) {
				const upDatedList = [...itemsInCart];
				const upDatedProductCart = [...cartProducts];
				upDatedList[itemIndex].amountOfProducts += 1;
				upDatedProductCart[itemIndex].quantity += 1;
				setItemsInCart(upDatedList);
				setCartProducts(upDatedProductCart);
			} else {
				const item = {
					id: addCart.id,
					productName: addCart.attributes.productName,
					price: addCart.attributes.price,
					amountOfProducts: addCart.amountOfProducts || 1,
					stock: addCart.attributes.stock,
					image: addCart.attributes.image.data.attributes.url,
				};
				const item2 = {
					id: priceId(addCart.id),
					quantity: addCart.amountOfProducts || 1,
				}
				const upDatedProductCart = [...cartProducts, item2];
				setCartProducts(upDatedProductCart);

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
				items,
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
					<Route path="/stripe" element={<Payment />} />
					<Route path="/completion" element={<Completion />} />
					<Route path="/success" element={<Success />} />
					<Route path="/cancel" element={<Cancel />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</CartContext.Provider>
	);
}

export default App;
