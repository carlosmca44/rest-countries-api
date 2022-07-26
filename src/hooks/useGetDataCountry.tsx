import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useGetDataCountry = (countryParam: string | undefined) => {
  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/name/${countryParam}`
  );

  const [bordersToReturn, setBordersToReturn] = useState([]);

  let border: [] = [];
  let simpbord: any = [];

  const cca3: any = localStorage.getItem("cca3");
  const cca3List: [] = JSON.parse(cca3);

  useEffect(() => {
    if (data[0]) {
      if (data[0]["borders"]) {
        simpbord.push(data[0]["borders"]);
        simpbord[0].map((item: any, _key: any) => {
          return border.push(cca3List[item]);
        });
        setBordersToReturn(border);
      }
    }
  }, [data]);

  return { data, loading, error, borders: bordersToReturn };
};

export default useGetDataCountry;
