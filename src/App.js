import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchCountries = (searchKey) => {
    if (countries.length && searchKey !== "") {
      const filteredItems = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchKey.toLowerCase())
      );
      setFilteredCountries(filteredItems);
    } else {
      setFilteredCountries([...countries]);
    }
  };

  useEffect(() => {
    fetchData();
    searchCountries("");
  }, []);

  useEffect(() => {
    searchCountries(searchKey);
  }, [searchKey]);

  return (
    <>
      <div className="header">
        <input
          className="input"
          type="text"
          placeholder="Search for countries..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
      <div className="countries-page">
        {countries.length &&
          filteredCountries.map((country) => (
            <Card img={country.flags.png} name={country.name.common} />
          ))}
      </div>
    </>
  );
}

export default App;
