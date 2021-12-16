import React from 'react';
import maticLogo from './matic.png'
import ItemCount from '../../components/itemCount/ItemCount';

const Matic = () =>{
  return (
    <div>
      <h3>Matic</h3>
      <div>
        <h1> Hi, I'm Matic! Buy me </h1>
        <img class="cryptoLogo" src={maticLogo} alt="maticImage"/>
        <ItemCount />
      </div>
    </div>
  );
}
export default Matic;