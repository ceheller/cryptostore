import { Link } from "react-router-dom";


const Item = ({ item }) => {
    return (
        <article className="item">
            <h3>{item.name}</h3>
            <img src={item.img} alt="thumbnail" />
            <p>Precio : ${item.price}</p>
            <Link to={`/product/${item.id}`}>View detail</Link>
        </article>
    )
}

export default Item;