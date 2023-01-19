import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  console.log(price);
  console.log(money);

  return (
    <div>
      <h1>To Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading. . .</strong>
      ) : (
        <div>
          <input
            onChange={(event) => setMoney(event.target.value)}
            type="number"
            placeholder="USD"
          />
          <button onClick={()=>setMoney(0)}>Reset</button>
          <br /><br />
          <select onChange={(event) => setPrice(event.target.value)}>
            <option value={0}>Select Coin . . .</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) ({coin.quotes.USD.price})
              </option>
            ))}
          </select>
          <h3>{money / price} 개</h3>
        </div>
      )}
    </div>
  );
}
export default App;
