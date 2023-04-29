import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { useGetCountriesQuery } from "../api/apiSlice";
import { FaArrowLeft } from "react-icons/fa";

const Detail = () => {
  const { pathname } = useLocation();

  const {
    data: countries,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCountriesQuery();

  const { countryName } = useParams();

  console.log(countryName);

  if (isLoading) return <div className="dark:text-white">Loading...</div>;

  if (isError) return <div>{error}</div>;

  const country = countries.find((country) => country.name === countryName);

  return (
    <div className="p-6">
      <div className="flex flex-col max-w-6xl w-full mx-auto">
        <Link
          className="sm:mt-16 mt-5 rounded bg-white dark:bg-primary p-3 flex justify-center items-center gap-3 w-32 dark:text-white text-xs shadow-md shadow-black/40"
          to="/rest-countries-api/"
        >
          <FaArrowLeft /> Back
        </Link>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 sm:gap-20 gap-10 justify-between">
          <div className="sm:h-96 h-60 w-full bg-white dark:bg-primary rounded overflow-hidden">
            <img
              src={country.flags.png}
              alt={country.name}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold dark:text-white">
              {country.name}
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap sm:gap-20 gap-5 sm:mt-10 mt-5">
              <ul className="text-xs font-semibold dark:text-white leading-6">
                <li>
                  Native Name: &nbsp;
                  <span className="font-light">{country.nativeName}</span>
                </li>
                <li>
                  Population: &nbsp;
                  <span className="font-light">
                    {country.population.toLocaleString()}
                  </span>
                </li>
                <li>
                  Region: &nbsp;
                  <span className="font-light">{country.region}</span>
                </li>
                <li>
                  Sub Region: &nbsp;
                  <span className="font-light">{country.subregion}</span>
                </li>
                <li>
                  Capital: &nbsp;
                  <span className="font-light">{country.capital}</span>
                </li>
              </ul>
              <ul className="text-xs font-semibold dark:text-white leading-6">
                <li>
                  Top Level Domain: &nbsp;
                  <span className="font-light">{country.topLevelDomain}</span>
                </li>
                <li>
                  Currencies: &nbsp;
                  {country.currencies.map((currency, index) => (
                    <span className="font-light" key={index}>
                      {currency.name}
                    </span>
                  ))}
                </li>
                <li>
                  Languages: &nbsp;
                  {country.languages.map((language, index) => (
                    <span className="font-thin" key={index}>
                      {language.name}
                      {country.languages.length - 1 === index ? "" : ", "}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:mt-20 mt-5">
              <p className="text-sm dark:text-white font-semibold">
                Border Countries: &nbsp;
              </p>
              <div className="flex flex-wrap gap-2 ">
                {country.borders &&
                  country.borders.map((border) => {
                    const matchingCountry = countries.find(
                      (ctry) => ctry.alpha3Code === border
                    );
                    if (!matchingCountry) return null; // handle the case when matching country is not found
                    return (
                      <span
                        className="p-2 bg-white rounded text-xs dark:bg-primary font-light dark:text-white"
                        key={matchingCountry.alpha3Code}
                      >
                        {matchingCountry.name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
