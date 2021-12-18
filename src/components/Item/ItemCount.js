import React from "react";
import { useState } from "react";
import { Button} from 'react-bootstrap';
  
const ItemCount = ({initial, onAdd}) => {
  let [counter, setItemCount] = useState(0);
  let [stock, setStockCount] = useState(10);

  const add = () => {
    if (stock > 0) {
    setItemCount(counter + 1)
    setStockCount(stock-1)
    }
  }

  const subtract = () => {
    if (counter > 0) {
    setItemCount(counter - 1)
    setStockCount(stock+1)
    }
  }
  
  const addItem = () => {
    onAdd(counter)
  }

  return (
    <div class="ItemCount">
        <p>How many of me do you want? { counter }</p>
          <Button onClick={ add }> Add unit </Button>
          <Button onClick={ subtract }> Subtract unit </Button>
          <Button onClick={ addItem }> Add me to the chart! </Button>
    </div>
  );
}

export default ItemCount;


