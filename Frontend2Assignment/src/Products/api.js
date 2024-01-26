import axios from "axios";

const GetApi = async (filters) => {
	const data = await axios.get(import.meta.env.VITE_STRAPI_URL + filters)
  return data
};

export default GetApi;
