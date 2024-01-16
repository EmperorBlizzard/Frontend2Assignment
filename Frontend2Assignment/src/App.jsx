import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ListingPage from "./Pages/ListingPage";
import CheckoutPage from "./Pages/CheckoutPage";
import CartPage from "./Pages/CartPage";
import BuildingPageToBeDeleted from "./Pages/BuildingPageToBeDeleted";


function App() {
<<<<<<< HEAD
=======
	let Component
	const PageLocation = window.location.pathname;
	if(PageLocation === "/"){
		Component = StartPage;
	}
	else{
		switch (window.location.pathname) {
			case "/StartPage":
				Component = StartPage
				break;
			case "/ListingPage":
				Component = ListingPage
				break;
			case "/Cartpage":
				Component = CartPage
				break;
			case "/BuildingPageToBeDeleted":
				Component = Building
				break;
			case "/Checkoutpage":
				Component = CheckOutPage
				break;
			case "/ProductDetailPage":
				Component = ProductDetailPage
				break;
		
			default:
				break;
		}
	
	}
>>>>>>> 18931122f43a1142552aae1555c7815282ac93c6

	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<StartPage />} />
				<Route path="/productdetailpage" element={<ProductDetailPage />} />
				<Route path="/listingpage" element={<ListingPage />} />
				<Route path="/checkoutpage" element={<CheckoutPage />} />
				<Route path="/cartpage" element={<CartPage />} />
				<Route path="/buildingpagetobedeleted" element={<BuildingPageToBeDeleted />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
