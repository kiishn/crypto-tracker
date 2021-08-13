import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  // getting coin values from api
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // set search string
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // get search results
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Cryptocurrency Tracker</h1>
        <form>
          <input
            type="text"
            placeholder="Search Cryptocurrency"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="crypto-container">
        {/*  mapping data to Coin object from coins array */}
        {filteredCoins.map((coin, index) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              index={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
