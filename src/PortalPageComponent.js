// PortalPageComponent.js
import React, { useEffect, useState } from 'react';
import contentfulClient from './contentfulClient';
import './PortalPageComponent.css'; // Import the CSS

const PortalPageComponent = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    contentfulClient.getEntry('6SltIAgsPPUqJRpxuCjR00')
      .then((response) => {
        setData(response.fields);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  if (!data.greeting) return <p>Loading...</p>;

  return (
    <div className="portal-container">
      <div className="first-section">
        <div className="greeting">
          <h2>{data.greeting}</h2>
        </div>
        <div className="fund-performance">
          <p className="fund1">{data.fundPerformancePeriodPrimary}</p>
          <p className="fund2">{data.fundPerformancePeriodSecondary}</p>
        </div>
      </div>
      <div className="second-section">
       <div className="value-section">
         <h3>{data.portfolioValueHeading}</h3>
         <p>120,000 USD</p>
       </div>
       <div className="value-section">
         <h3>{data.changeInValueHeading}</h3>
         <p>+15%</p>
       </div>
       <div className="value-section">
         <h3>{data.fundPerformanceHeading}</h3>
         <p>Good</p>
       </div>
     </div>
    </div>
  );
};

export default PortalPageComponent;
