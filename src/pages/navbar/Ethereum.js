import React from 'react';
import ethereumLogo from './eth.png'
const Ethereum = () =>{
  return (
    <div>
      <h3>Ethereum</h3>
      <div>
       <h1> Hi, I'm Ethereum! Buy me </h1>
        <img class="cryptoLogo" src={ethereumLogo} alt="ethereumImage"/>
      </div>
    </div>
  );
}
export default Ethereum;