import React from 'react';
import DressBarData from 'components/molecules/DressBarData';
import UAParser from 'ua-parser-js';
import 'react-multi-carousel/lib/styles.css';

const DressBar = ({ deviceType }) => {
  return <DressBarData deviceType={deviceType} />;
};
DressBar.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';
  return { deviceType };
};
export default DressBar;
