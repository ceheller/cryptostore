import React from 'react';
import bnbLogo from './bnb.png'
import ItemListContainer from '../../components/navbar/ItemListContainer';

const Bnb = () =>{
  return (
    <div>
      <h3>Bnb</h3>
      <div>
      <h1> Hi, I'm Binance Coin! Buy me </h1>
      <img class="cryptoLogo" src={bnbLogo} alt="bnbImage"/>
      <ItemListContainer />
      </div>
    </div>
  );
}
export default Bnb;
