import React from 'react';
import ItemCount from '../itemCount/ItemCount';

const ItemListContainer = ({Greeting}) => {
    const onAdd = (quantity) => {
        console.log("Number of units you are buying: " + quantity)
    }

return (
    <div>
        <h2>{Greeting}</h2>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
)

}
export default ItemListContainer;