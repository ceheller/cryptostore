import React from 'react';
import bnbLogo from './bnb.png'
import ItemCount from '../../components/itemCount/ItemCount';

const Bnb = () =>{
  return (
    <div>
      <h3>Bnb</h3>
      <div>
      <h1> Hi, I'm Binance Coin! Buy me </h1>
      <img class="cryptoLogo" src={bnbLogo} alt="bnbImage"/>
      <ItemCount />
      </div>
    </div>
  );
}
export default Bnb;
