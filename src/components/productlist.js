import { useEffect, useState } from "react";
import Product from "./product";
import { json } from "react-router-dom";

function ProductList() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getAllProduct = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }

    const getAllCategories = () => {
        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data))
    }

    const getProductsInCategory = (catName) => {
        console.log(catName)
        fetch(`${api_url}/category/${catName}`)
            .then(res => res.json())
            .then((data) => setProducts(data))
    }


    useEffect(() => {
        getAllProduct();
        getAllCategories();
        getProductsInCategory();
    }, []);

    return (

        <>
            <h1 className="text-center p-3 " >Our Product</h1>
            <div className="container">
                <button className="btn btn-primary"
                    onClick={() => getAllProduct()} >
                    All
                </button>
                {categories.map((category) => {
                    return (
                        <button className="btn btn-primary"
                            onClick={() => getProductsInCategory(category)} key={category}>
                            {category}
                        </button>
                    )
                })}
                <div className="row">

                    {products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Product product={product} showButton={true} />
                            </div>
                        )
                    }
                    )}


                </div>

            </div>
        </>
    )
}

export default ProductList;