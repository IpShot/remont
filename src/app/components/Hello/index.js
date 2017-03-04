import React from 'react';
import style from './style.css';

const Hello = ({ brandName, onShowBrandClick }) => (
  <div className={style.hello}>
    {`Привет! Я ${brandName} и я сделаю вам крутейший ремонт!`}
    <br />
    <button onClick={onShowBrandClick}>Show name</button>
  </div>
);

export default Hello;
