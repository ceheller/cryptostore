import React from 'react';
import {  Link } from "react-router-dom";

const NavBar= () =>{
  return (
  <div class="NavBar">
    <li>
      <Link to="/">Bitcoin</Link>
    </li>
    <li>
      <Link to="/Ethereum">Ethereum</Link>
    </li>
    <li>
      <Link to="/Bnb">Bnb</Link>
    </li>
    <li>
      <Link to="/Matic">Matic</Link>
    </li>
  </div>
  );
}
export default NavBar;