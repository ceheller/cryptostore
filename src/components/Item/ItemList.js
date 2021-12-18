
import Item from "./Item"

const ItemList = ({list}) => {
    return (
        <div>
            {list.map((item,index)=>{
                return <Item key={index} item={item}/>
            })}
        </div>
    )
}

export default ItemList
