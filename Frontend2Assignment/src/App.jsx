import ListingPage from "./Pages/ListingPage";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import DeleteMe from "./components/individuals/DeleteMe";
import StartPage from "./Pages/StartPage";
import CartPage from "./Pages/CartPage";
import Building from "./Pages/BuildingPageToBeDeleted";
import CheckOutPage from "./Pages/CheckoutPage";
import ProductDetailPage from "./Pages/ProductDetailPage"

function App() {
	let Component
	switch (window.location.pathname) {
		case "/Pages/Pages/Pages/Pages/Pages/Pages/Pages/Pages/startPage":
			Component = StartPage
			break;
		case "/Pages/Pages/Pages/Pages/Pages/Pages/Pages/Pages/ListingPage":
			Component = ListingPage
			break;
		case "/Pages/Pages/Pages/Pages/Pages/Pages/Pages/Pages/Cartpage":
			Component = CartPage
			break;
		case "/Pages/Pages/Pages/Pages/Pages/Pages/Pages/Pages/BuildingPageToBeDeleted":
			Component = Building
			break;
		case "/Pages/Pages/Pages/Pages/Pages/Pages/Pages/Pages/Checkoutpage":
			Component = CheckOutPage
			break;
		case "/Pages/Pages/Pages/Pages/Pages/Pages/Pages/Pages/ProductDetailPage":
			Component = ProductDetailPage
			break;
	
		default:
			break;
	}

	return (
		<>
			<Header />
			<DeleteMe/>
			<Component />
			<Footer />
		</>
	);
}

export default App;
