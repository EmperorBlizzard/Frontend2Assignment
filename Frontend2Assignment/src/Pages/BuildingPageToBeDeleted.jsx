import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import GetApi from "../Products/api";
import { useEffect, useState } from "react";

function Building() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await GetApi();
				setProducts(result.data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Header />
			<h1>building page</h1>
			{products && (
				<>
					{products.map((product) => (
						<div key={product.id}>{product.attributes.productName}</div>
					))}
				</>
			)}
			<Footer />
		</>
	);
}

export default Building;
