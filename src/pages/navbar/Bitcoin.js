import React from 'react';
import bitcoinLogo from './bitcoin.png';
import ItemCount from '../../components/navbar/ItemCount';

const Bitcoin = () =>{
  return (
    <div>
      <h3>Bitcoin</h3>
      <div>
        <h1> Hi, I'm Bitcoin! Buy me </h1>
        <img class="cryptoLogo" src={bitcoinLogo} alt="bitcoinImage"/>
        <ItemCount />
      </div>
    </div>
  );
}
export default Bitcoin;