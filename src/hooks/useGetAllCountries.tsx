import { useEffect } from "react";
import useFetch from "./useFetch";

const useGetAllCountries = (search: string, filters: string) => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  let cc: any = {};
  useEffect(() => {
    data.map((item: any, _key: any) => {
      return (cc[item.cca3] = item.name.common);
    });
    localStorage.setItem("cca3", JSON.stringify(cc));
  }, [data]);

  let results = [];
  if (!search && filters === "All") {
    results = data;
  } else if (search && filters === "All") {
    results = data.filter((data: any) =>
      data["name"]["common"]
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );
  } else {
    results = data.filter(
      (data: any) =>
        data["name"]["common"]
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) &&
        data["region"].toLocaleLowerCase().includes(filters.toLocaleLowerCase())
    );
  }

  return { results, loading, error };
};

export default useGetAllCountries;
