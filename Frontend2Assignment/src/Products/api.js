import axios from "axios";

const token =
  "5562646e7e3eadd65f05beace38abfb06867e776a29a35cf534ee96d767019fee3078572fa0e81d02b31bfd83282c6a91fecb9eeed842c9176447e76b875e4b16a9138a804d45e404767087601479e4840178aeeb41b185313830a1d4dbe1fa75bf86dc85d1fd66a2b3113e24a756e922932af719323171b917f49ec39b28054";

const GetApi = async () => {
  const data = await axios.get(import.meta.env.VITE_STRAPI_URL + "api/products/", {
    headers: {  },

  });
  console.log(data);

  return data;
};

export default GetApi;
