import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetDataCountry from "../hooks/useGetDataCountry";
import LeftArrow from "./svg/LeftArrow";

const CountryDescription: React.FC = () => {
  const { countryParam } = useParams();

  const { data, loading, error, borders } = useGetDataCountry(countryParam);

  if (loading) return <>Loading text</>;

  if (error) return <>ERROR</>;

  return (
    <div className="description-container mt-80">
      <Link className="link-to" to={"/"}>
        <div className="back-button">
          <LeftArrow />
          Back
        </div>
      </Link>
      {data[0] ? (
        <div className="flex fr-column mt-80">
          <img className="flag-size" src={data[0]["flags"]["svg"]} alt="f" />
          <div className="country-info-root">
            <b>
              <p className="country-name">{data[0]["name"]["common"]}</p>
            </b>

            <div className="country-descriptions">
              <div className="description-s1">
                <p>
                  <b className="sub-header">Native Name: </b>
                  {
                    data[0]["name"]["nativeName"][
                      Object.keys(data[0]["name"]["nativeName"])[0]
                    ]["common"]
                  }
                </p>
                <p>
                  <b className="sub-header">Population: </b>
                  {data[0]["population"]}
                </p>
                <p>
                  <b className="sub-header">Region: </b>
                  {data[0]["region"]}
                </p>
                <p>
                  <b className="sub-header">Sub Region: </b>
                  {data[0]["subregion"]}
                </p>
                <p>
                  <b className="sub-header">Capital: </b>
                  {data[0]["capital"]}
                </p>
              </div>

              <div className="description-s2">
                <p>
                  <b className="sub-header">Top Level Domain: </b>
                  {data[0]["tld"]}
                </p>
                <p>
                  <b className="sub-header">Currencies: </b>
                  {
                    data[0]["currencies"][
                      Object.keys(data[0]["currencies"])[0]
                    ]["name"]
                  }
                </p>
                <p>
                  <b className="sub-header">Languages: </b>
                  {data[0]["languages"][Object.keys(data[0]["languages"])[0]]}
                </p>
              </div>
            </div>

            <div className="borders-btn-container">
              <b className="sub-header">Border Countries: </b>
              <div className="borders-btn">
                {borders.map((item: any, key: any) => {
                  return (
                    <Link
                      key={key}
                      className="btn link-to"
                      to={`/description/${item}`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CountryDescription;
