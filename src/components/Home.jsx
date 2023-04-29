import { FaSearch, FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useGetCountriesQuery } from "../api/apiSlice";
import { useState } from "react";
import CountryThumb from "./CountryThumb";
import { Link } from "react-router-dom";

const Home = () => {
  const darkMode = useSelector((state) => state.global.darkMode);

  const [Open, setOpen] = useState(false);

  const [Filter, setFilter] = useState("");

  const [FilteredCountries, setFilteredCountries] = useState();

  const [Value, setValue] = useState("");

  const {
    data: countries,
    isLoading,
    isError,
    error,
  } = useGetCountriesQuery("countriesList");

  if (isLoading)
    return <div className=" dark:text-white">Loading Countries...</div>;

  if (isError) return <div>{error?.data?.message}</div>;

  const regionsSet = new Set();

  countries.forEach((country) => {
    regionsSet.add(country.region);
  });

  const regions = Array.from(regionsSet);
  regions.sort();

  const handleRegionChange = (e) => {
    setOpen(false);
    setFilter(e);
    setFilteredCountries(countries.filter((country) => country.region === e));
    setValue("");
  };

  const handleSearch = (event) => {
    setValue(event.target.value);
    setFilteredCountries(
      Filter
        ? countries.filter(
            (country) =>
              country.region.includes(Filter) &&
              country.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
          )
        : countries.filter((country) =>
            country.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          )
    );
  };

  const handleClearFilter = () => {
    setFilteredCountries();
    setFilter("");
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-5 items-center justify-between w-full mx-auto max-w-6xl mt-5">
        <div className="flex items-center gap-4 px-6 bg-white dark:bg-primary w-full sm:w-72 h-10 rounded focus-within: border-black border border-transparent focus-within:border focus-within:border-black focus-within:dark:border-white hover:border hover:border-black hover:dark:border-white transition-all duration-300">
          <FaSearch color={darkMode ? "white" : "hsl(0, 0%, 52%)"} />
          <input
            type="text"
            maxLength={10}
            id="search"
            name="search"
            value={Value}
            className="bg-transparent text-xs outline-none h-full w-full rounded dark:text-white"
            placeholder="Search for a country"
            onChange={handleSearch}
          />
        </div>

        <div className="relative rounded bg-white dark:bg-primary h-10 w-36 flex flex-col items-center justify-center shadow-md">
          {Filter && (
            <button
              className="absolute left-40 sm:-left-20 rounded h-full px-3 hover:shadow hover:bg-white dark:hover:bg-primary text-red-600"
              onClick={handleClearFilter}
            >
              clear
            </button>
          )}
          <button
            name="filter"
            id="filter"
            className="mx-auto text-xs dark:text-white flex items-center w-full h-full justify-center border border-transparent rounded hover:border-black hover:dark:border-white border-black transition-all duration-500"
            onClick={() => setOpen(!Open)}
          >
            {Filter ? Filter : "Filter by region"} &nbsp;
            <FaCaretDown />
          </button>
          {Open && (
            <ul className="absolute top-12 rounded bg-white dark:bg-primary dark:text-white w-full text-xs shadow-md">
              {regions.map((region, index) => (
                <li
                  key={index}
                  className={`dark:hover:bg-secondary hover:bg-VeryLightGray dark:text-white cursor-pointer p-2 pl-5 ${
                    index === 0 ? "mt-2" : ""
                  }`}
                  onClick={() => handleRegionChange(region)}
                >
                  {region}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16 sm:gap-32 gap-12 mx-auto max-w-6xl mt-10">
        {FilteredCountries
          ? FilteredCountries.map((country, index) => (
              <li key={index}>
                <Link to={`/detail/${country.name}`}>
                  <CountryThumb country={country} />
                </Link>
              </li>
            ))
          : countries.map((country, index) => (
              <li key={index}>
                <Link to={`/rest-countries-api/detail/${country.name}`}>
                  <CountryThumb country={country} />
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Home;
