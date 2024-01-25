import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import GetApi from "../Products/api";

function Building() {

	GetApi()
	return (
		<>
			<Header />
			<h1>building page</h1>
			
			<Footer />
		</>
	);
}

export default Building;
