import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Layout/NavigationBar";
import { Table, Button, FormControl } from 'react-bootstrap'; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import "./Dashboard.scss"

export default function Dashboard() {

    // TODO:
    //  create a list for the user products add it to the api and load the elements
    //  from that to the dash board

    // TODO:
    //  create the endpoints to add delete and post to the user list
    //


    const [products, setProducts] = useState([]);
    const { productList, setProductList } = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

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

    function handleCheckout(event) {
        //TODO: Create the checkout logic
    }

    // Function to filter products based on the search query
    const filteredProducts = products.filter((product) => {
        const productName = product.name.toLowerCase();
        return productName.includes(searchQuery.toLowerCase());
    });

    return (
        <div>
            <h1>My Products </h1>
            <FormControl
                type="text"
                placeholder="Search for products"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price.toFixed(2)}$</td>
                        <td>
                            <Button
                                id={product.id}
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>
                            <Button
                                id={product.id}
                                onClick={handleCheckout}
                            >
                                Remove
                            </Button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}