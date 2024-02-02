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

	useEffect(() => {
		console.log('items in cart is updated')
		console.log(itemsInCart);
	}, [itemsInCart])



  return (
    <CartContext.Provider key={itemsInCart} value={{itemsInCart, setItemsInCart}}>
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
