import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import ItemListContainer from "../Item/ItemListContainer";

const initialProduct =  {
    name : "Bitcoin",
    price : 40000
}

const ItemDetailContainer = () => {

/*
    let [product, setProduct] = useState(null)
    useEffect(()=>{
        const promise = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(initialProducts)
            },2000)
        })
        
        `promise`
        .then((products)=>{
            console.log("Todo bien")
            setList(products)
        })
        .catch(()=>{
            console.log("Todo mal")
        })
    },[])
    */

    return (
        <div>
            <ItemDetail product={initialProduct}/>
        </div>
    )
}

export default ItemDetailContainer;