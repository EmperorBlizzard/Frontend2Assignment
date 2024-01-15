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
	console.log(window.location.pathname)
	switch (window.location.pathname) {
		case "/startPage":
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

	return (
		<>
			<Header />
			<DeleteMe/>
			<Component/>
			<Footer />
		</>
	);
}

export default App;
