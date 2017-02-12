import React from 'react';
import { connect } from 'react-redux';


const Root = ({ brandName }) => (
  <div>
    {`Привет! Я ${brandName} и я сделаю вам крутейший ремонт!`}
  </div>
);

const map = ({ brandName }) => ({ brandName });

export default connect(map)(Root);
