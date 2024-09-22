// import React from 'react';
// import { Link, } from 'react-router-dom';

// export default function Services() {
//   return (
//     <div>
        
//         <Link to="#">Analyze</Link>
//     </div>
//   )
// }


//ai model
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch AI model data from the backend
    fetch('/api/alerts')
      .then((response) => response.json())
      .then((data) => setAlerts(data))
      .catch((error) => console.error('Error fetching alerts:', error));
  }, []);

  return (
    <div>
      <h1>Services</h1>
      <Link to="#">Analyze</Link>

      {/* Display AI model output */}
      <div>
        <h2>AI Model Alerts</h2>
        {alerts.length > 0 ? (
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        ) : (
          <p>No alerts at the moment.</p>
        )}
      </div>
    </div>
  );
}
