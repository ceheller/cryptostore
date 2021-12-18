import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const initialProducts = [
    { name: "Bitcoin", precio: 50 },
    { name: "Ethereum", precio: 100 },
    { name: "Bnb", precio: 150 },
    { name: "Matic", precio: 150 }
]

const ItemListContainer = ({ greeting }) => {

    let [list, setList] = useState([])
    const { id } = useParams()

    
    useEffect(() => {
        /* if(id){
            
        }else{
        } */
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(initialProducts)
            }, 2000)
        })

        promise
            .then((products) => {
                console.log("Todo bien")

                //if(id){

                //}else{
                setList(products)
                //}
            })
            .catch(() => {
                console.log("Todo mal")
            })

    }, [id])

    

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList list={list} />
        </div>
    )
}

export default ItemListContainer