function Display({ keys, eachCurrency, currency }) {
  function handleClick() {
    currency = { eachCurrency };
  }
  return <option onClick={handleClick}>{eachCurrency}</option>;
}

export default Display;
