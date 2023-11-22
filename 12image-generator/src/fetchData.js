import axios from "axios";

//can not idrectly put cars or anyother thing in url use params
const url = "https://api.unsplash.com/search/photos";

const fetchData = async (term) => {
  //code for making http request
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID AZ6D-XV9versa2aG3XCTsyKPmzeMLLqleTNuRSktGXM",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default fetchData;

/*
Mistake 2 - using Headers -- it should be small
- use params for searching for specific , cannot write cars directly
*/
