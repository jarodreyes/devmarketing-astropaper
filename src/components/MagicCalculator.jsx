import React, { useState } from "react";

const MagicNumberCalculator = () => {
  const [ticker, setTicker] = useState("");
  const [magicNumber, setMagicNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFinancialData = async tickerSymbol => {
    const apiUrl = `https://financialmodelingprep.com/api/v3/income-statement/${tickerSymbol}?period=quarter&apikey=${
      import.meta.env.PUBLIC_FIN_API_KEY
    }`;
    setLoading(true);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      debugger;
      // Add logic here to calculate the Magic Number from the data
      // setMagicNumber(calculatedMagicNumber);
    } catch (error) {
      console.error("Error fetching financial data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchFinancialData(ticker);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ticker}
          onChange={e => setTicker(e.target.value)}
          placeholder="Enter ticker symbol"
        />
        <button type="submit">Calculate Magic Number</button>
      </form>
      {loading && <p>Loading...</p>}
      {magicNumber && <p>Magic Number: {magicNumber}</p>}
    </div>
  );
};

export default MagicNumberCalculator;
