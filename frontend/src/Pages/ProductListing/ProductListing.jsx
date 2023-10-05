import React, { useEffect, useState } from "react";
import "./ProductListing.scss"; // Update the import path as needed

const ProductListingPage = () => {
    // Define a state to store the products fetched from the server
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the API
        fetch("http://localhost:8080/api/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                // Update the products state with the fetched data
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

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
                            <button className="buy-button">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ProductListingPage;
