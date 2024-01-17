import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ListingPage from "./Pages/ListingPage";
import CheckoutPage from "./Pages/CheckoutPage";
import CartPage from "./Pages/CartPage";
import BuildingPageToBeDeleted from "./Pages/BuildingPageToBeDeleted";
import ContactPage from "./Pages/ContactPage";



function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<StartPage />} />
				<Route path="/productdetailpage" element={<ProductDetailPage />} />
				<Route path="/listingpage" element={<ListingPage />} />
				<Route path="/checkoutpage" element={<CheckoutPage />} />
				<Route path="/cartpage" element={<CartPage />} />
				<Route path="/buildingpagetobedeleted" element={<BuildingPageToBeDeleted />} />
				<Route path="/contactpage" element={<ContactPage />} /> 
			</Routes>
		</BrowserRouter>
	);
}

export default App;
