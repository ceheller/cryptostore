import ItemCount from "../Item/ItemCount"

const ItemDetail = ({product}) => {

    const onAdd = (quantity)=>{ 
        console.log("I'm onAdd from ItemDetail")
        console.log("Number of items: " + quantity)
        //setQuantity(quantity)
    } 
    
    return (
        <div>
            <h1>Product detail</h1>
            <p>Name: {/* product.name */}</p>
            <p>Price: ${/* product.price */}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail