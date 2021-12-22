import ItemCount from "../Item/ItemCount";
import React, { useState } from 'react';

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState({Bitcoin: 0, Ethereum: 0, Bnb: 0, Matic: 0});

    const onAdd = (quantity)=>{ 
        console.log("I'm onAdd from ItemDetail")
        console.log("Number of items: " + quantity)
        setQuantity(quantity)
    } 
    
    return (
        <div>
            <h1>Product detail</h1>
            <p>Name: { product.name }</p>
            <p>Price: ${ product.price }</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail