import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Layout/NavigationBar";

import "./ProductListing.scss";

export default function ProductListingPage() {
    const [products, setProducts] = useState([]);
    const { productList, setProductList } = useContext(AppContext);

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    // console.log(productList);

    function handleAddToCartButton(event) {
        setProductList([...productList, products[event.target.id - 1]]);
    }

    return (
        <div>
            <h1>Product Listing</h1>
            <ul className="product-container">
                {products.map((product) => (
                    <div className="product-card" key={ product.id }>
                        <img src="" alt="" />
                        <div className="prodcut-info">
                            <h2 className="product-title">{ product.name }</h2>
                            <p className="product-description">{ product.description }</p>
                            <p className="product-rpice">{ product.price.toFixed(2) }$</p>
                            <button 
                                className="add-to-cart-button" 
                                id={ product.id } 
                                onClick={ handleAddToCartButton } 
                            >Add to Cart</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};
