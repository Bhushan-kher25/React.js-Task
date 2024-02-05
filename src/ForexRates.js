import React, { useState } from 'react';

const ForexRates = () => {
  const [forexData, setForexData] = useState(null);

  const fetchForexRates = async () => {
    const apiUrl = 'https://api.forexrateapi.com/v1/latest?api_key=5a4890bd1b6140ff7c2e0aa89adef84f&base=USD&currencies=EUR,INR,JPY';

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setForexData(data.rates);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Forex Rate Viewer</h1>
      <button onClick={fetchForexRates}>Fetch Rates</button>
      {forexData && (
        <div>
          <h2>Forex Rates</h2>
          <ul>
            {Object.entries(forexData).map(([currency, rate]) => (
              <li key={currency}>{`${currency}: ${rate}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ForexRates;
