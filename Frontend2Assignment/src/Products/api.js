import axios from "axios";

const GetApi = async () => {
	const data = await axios.get(import.meta.env.VITE_STRAPI_URL + "products?populate=*")
  // console.log(data)
  return data
};

export default GetApi;
