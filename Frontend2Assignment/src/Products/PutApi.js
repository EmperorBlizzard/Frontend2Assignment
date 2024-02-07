import axios from "axios";

const PutApi = async (id, number) => {
	try {
		const response = await axios.put(
			`${import.meta.env.VITE_STRAPI_URL}products/${id}`,
			{ data: { stock: number } }
		);

		// Kontrollera om svarskoden är inom det förväntade intervallet
		if (response.status >= 200 && response.status < 300) {
			return response.data;
		} else {
			throw new Error(`Felaktigt svar från servern: ${response.status}`);
		}
	} catch (error) {
		console.error("Fel vid PUT API-anrop:", error);
		throw error; // Kasta felet så att det kan hanteras där funktionen anropas
	}
};

export default PutApi;
