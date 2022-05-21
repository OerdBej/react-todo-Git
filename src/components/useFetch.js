import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //   as a parameter url for the endpoint, when it changes its gonna re-run dependencies
  useEffect(
    (url) => {
      setTimeout(() => {
        //fetch => promise => object => if server working || res is an OBJECT json() fetch, OK is proprety form the response fetching data. => throw Error(message here) we catch(), save to the state => update in component. we pass the url => we can use this into the future reausable like this.
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch the data. This is catched by the catch()");
            }
            console.log(res);
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err) => {
            console.log(err.message);
            // when we have error, spinner(false).The .catch() does not catch the erros if the object response is not OK from the fetch.Alone it send the reposnse object but it does not contain data.
            setIsPending(false);
            setError(err.message);
          });
      }, 1000);
    },
    [url]
  ); //empty dependencies run one time, or we can run if we put something there.

  //   CUSTOM Hooks, need to return the values states here in object
  return { data, isPending, error };
};

export default useFetch;
