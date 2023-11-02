import { useEffect, useState } from "react";

/**
 * creating custom hook for making a call to currency api
 * custom hook -- simply a fn -- have to return somthing
 * using useEffect -- to determine when is fetch to be called
 * using useState -- to enable the fetch data come on screen
 */

function useFetchData(currency) {
  const [fetchData, setFetchData] = useState({});

  useEffect(() => {
    let response = fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let res = response[currency]; // look why response.currency not working
        setFetchData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);
  //console.log(response);

  return fetchData;
}

export default useFetchData;
