import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  ip, region, city, postalCode, timezone, isp,
}) => (
  <div>
    <div>
      IP Address:
      {' '}
      {ip}
    </div>
    <div>
      Location:
      {' '}
      {region}
      ,
      {' '}
      {city}
      ,
      {' '}
      {postalCode}
    </div>
    <div>
      Timezone:
      {' '}
      {timezone}
    </div>
    <div>
      ISP:
      {' '}
      {isp}
    </div>
  </div>
);

Description.propTypes = {
  ip: PropTypes.string,
  region: PropTypes.string,
  city: PropTypes.string,
  postalCode: PropTypes.string,
  timezone: PropTypes.string,
  isp: PropTypes.string,
};

Description.defaultProps = {
  ip: 'N/A',
  region: 'N/A',
  city: 'N/A',
  postalCode: 'N/A',
  timezone: 'N/A',
  isp: 'N/A',
};

export default Description;
