import React from "react";
import "./Coin.css";

const Coin = ({ name, image, symbol, price, priceChange, index }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <div className="container-1">
            <p className="coin-price">
              <span>Price: </span>
              <p>₹{price}</p>
            </p>
          </div>

          <div className="container-3">
            {priceChange < 0 ? (
              <p className="coin-percent">
                <span>Coin-Percent 24h: </span>
                <p className="red">{priceChange.toFixed(2)}%</p>
              </p>
            ) : (
              <p className="coin-percent">
                <span>Coin-Percent 24h: </span>
                <p className="green">{priceChange.toFixed(2)}%</p>
              </p>
            )}
          </div>
          <div>
            <img
              src={`https://www.coingecko.com/coins/${index}/sparkline`}
              alt="NA"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
