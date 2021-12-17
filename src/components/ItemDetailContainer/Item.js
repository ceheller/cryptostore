const Item = ({item}) => {
    return (
        <article>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button>View detail</button>
        </article>
    )
}

export default Item;