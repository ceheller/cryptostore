import React from 'react';
import ethereumLogo from './eth.png'
import ItemCount from '../../components/itemCount/ItemCount';

const Ethereum = () =>{
  return (
    <div>
      <h3>Ethereum</h3>
      <div>
       <h1> Hi, I'm Ethereum! Buy me </h1>
        <img class="cryptoLogo" src={ethereumLogo} alt="ethereumImage"/>
        <ItemCount />
      </div>
    </div>
  );
}
export default Ethereum;