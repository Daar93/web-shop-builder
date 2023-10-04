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
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListingPage;
