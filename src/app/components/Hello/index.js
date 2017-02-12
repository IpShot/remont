import React from 'react';
import style from './style.css';

const Hello = ({ brandName }) => (
  <div className={style.hello}>
    {`Привет! Я ${brandName} и я сделаю вам крутейший ремонт!`}
  </div>
);

export default Hello;
