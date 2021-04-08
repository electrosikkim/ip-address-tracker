import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Container from './components/Container';
import Description from './components/Description';

const App = () => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios
        .get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEOLOCATION_KEY}&ipAddress=8.8.8.8`);

      setData(response.data);
      setIsLoaded(true);
    } catch (err) {
      setError('Something went wrong while fetching you data');
      setIsLoaded(true);
    }
  };

  useEffect(() => fetchData(), []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Container>
      <Description
        ip={data.ip}
        region={data.location.region}
        city={data.location.city}
        postalCode={data.location.postalCode}
        timezone={data.location.timezone}
        isp={data.isp}
      />
    </Container>
  );
};

export default App;
