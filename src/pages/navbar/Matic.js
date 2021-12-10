import React from 'react';
import maticLogo from './matic.png'
const Matic = () =>{
  return (
    <div>
      <h3>Matic</h3>
      <div>
        <h1> Hi, I'm Matic! Buy me </h1>
        <img class="cryptoLogo" src={maticLogo} alt="maticImage"/>
      </div>
    </div>
  );
}
export default Matic;