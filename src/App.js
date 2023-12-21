import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="countries-page">
      {countries &&
        countries.map((country) => (
          <Card img={country.flags.png} name={country.name.common} />
        ))}
    </div>
  );
}

export default App;
