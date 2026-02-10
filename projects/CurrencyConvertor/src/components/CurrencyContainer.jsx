import { useState } from "react";
import { IoSwapVerticalOutline } from "react-icons/io5";

function CurrencyContainer() {
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const currencies = ["USD", "INR", "EUR", "GBP"];

  function swapCurr() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <>
      <div className="container">
        <h1 className="heading">Currency Convertor</h1>

        <input type="number" value={amount}
          onChange={(e) => { setAmount(Number(e.target.value)) }} placeholder="Enter Amount" className="inputBox" />

        <div className="swapColumn">
          <label className="label">From:</label>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}
              </option>
            ))}
          </select>


          <button className="swapBtn" onClick={swapCurr}>
            <IoSwapVerticalOutline />
          </button>

          <label className="label">To:</label>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}
              </option>
            ))}
          </select>
        </div>

        <button className="convertbtn">Convert</button>
        <h3 className="result">Result: </h3>

      </div>
    </>
  )
}
export default CurrencyContainer;

