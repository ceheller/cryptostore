import React from 'react';
import bitcoinLogo from './bitcoin.png';


const Bitcoin = () =>{
  return (
    <div>
      <h3>Bitcoin</h3>
      <div>
        <h1> Hi, I'm Bitcoin! Buy me</h1>
        <img className="cryptoLogo" src={bitcoinLogo} alt="bitcoinImage"/>
      </div>
    </div>
  );
}
export default Bitcoin;