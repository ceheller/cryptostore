import ItemDetail from "./ItemDetail";

const initialProduct =  {
    name : "Bitcoin",
    price : 40000
}

const ItemDetailContainer = () => {
    return (
        <div>
            <ItemDetail product={initialProduct}/>
        </div>
    )
}

export default ItemDetailContainer;