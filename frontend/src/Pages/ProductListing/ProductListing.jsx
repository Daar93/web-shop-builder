
const ProductListingPage = () => {
    // Define your product data here or fetch it from an API
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Description of Product 1",
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description of Product 2",
        },
        // Add more products as needed
    ];

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
}
export default ProductListingPage;