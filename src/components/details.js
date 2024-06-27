import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product.js";

function Details()
{
    
    const params = useParams();
    // console.log(params.productId)

    const api_url="https://fakestoreapi.com/products";
    const [product ,setProduct] = useState({});
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product))
    },[]);

    return(
        <>
            <Product product={product} showButton={false}/>
        </>
    )
}

export default Details;