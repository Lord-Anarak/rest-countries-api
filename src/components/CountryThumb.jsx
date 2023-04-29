import React from "react";

const CountryThumb = ({ country }) => {
  return (
    <div className="xl:w-60 dark:bg-primary bg-white rounded overflow-hidden shadow-md hover:shadow-2xl hover:shadow-black transition-all duration-300">
      <img
        src={country.flags.png}
        alt={country.name}
        className="xl:h-32 h-48 w-full"
      />
      <div className="p-4">
        <h2 className="font-extrabold dark:text-white text-md">
          {country.name}
        </h2>
        <ul className="text-xs font-bold mt-3 dark:text-VeryLightGray leading-5">
          <li>
            Population:{" "}
            <span className="font-normal">
              {country.population.toLocaleString()}
            </span>
          </li>
          <li>
            Region: <span className="font-normal">{country.region}</span>
          </li>
          <li>
            Capital: <span className="font-normal">{country.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryThumb;
