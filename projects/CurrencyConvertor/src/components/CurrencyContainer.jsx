import "../App.css";
import { useEffect, useState } from "react";
import { IoSwapVerticalOutline } from "react-icons/io5";

function CurrencyContainer() {
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const [currencies, setCurrencies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then(res => res.json())
      .then(data => {
        setCurrencies(Object.keys(data.rates));
        setRates(data.rates);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(err => {
        alert("Error in fetching data ", err);
        loading(false);
      })
  }, []);

  function swapCurr() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  const [convertAmount, setConvertAmount] = useState();
  function convertTheAmount() {
    const result = amount * (rates[toCurrency] / rates[fromCurrency]);
    setConvertAmount(result.toFixed(2));
  }

  useEffect(() => {
    convertTheAmount();
  }, [amount, fromCurrency, toCurrency, rates])


  return (
    <>
      <div className="currcontainer">
        <h1 className="heading">Currency Convertor</h1>

        <input type="number" value={amount}
          onChange={(e) => { setAmount(Number(e.target.value)) }} placeholder="Enter Amount" className="inputBox" />

        {loading ?
          <>
            <div className="spinnerwrape">
              <div className="spinner-border loadingSpinner" role="status">{/* loading spinner */}
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </> :
          <>
            <div className="swapColumn">
              <label className="label">From:</label>
              <select className="selectTab" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>{currency}
                  </option>
                ))}
              </select>


              <button className="swapBtn" onClick={swapCurr}>
                <IoSwapVerticalOutline />
              </button>

              <label className="label">To:</label>
              <select className="selectTab" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>{currency}
                  </option>
                ))}
              </select>
            </div>
          </>
        }



        <button className="convertbtn" onClick={convertTheAmount}>Convert</button>
        <h3 className="result">Result: {convertAmount}</h3>

      </div>
    </>
  )
}
export default CurrencyContainer;

