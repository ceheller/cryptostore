import ItemDetail from "../ItemDetail/ItemDetail"

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