import ItemCount from '../itemCount/ItemCount';

const initialProducts = [
    { name: "Bitcoin", precio: 50 },
    { name: "Ethereum", precio: 100 },
    { name: "Bnb", precio: 150 },
    { name: "Matic", precio: 150 }
]


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