import "../App.css";
function DropDown({
  lable,
  fromCurrency,
  setFromCurrency,
  currencies

}) {
  return (
    <>
      <div className="swapColumn">
        <label className="label">{lable}:</label>
        <select className="selectTab" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}
            </option>
          ))}
        </select>

      </div>
    </>
  )
}
export default DropDown;