import { useContext, useEffect } from "react";
import { AppContext } from "../Layout/NavigationBar";

import "./ShoppingCart.scss";

export default function ShoppingCartPage() {
    const { productList, setProductList } = useContext(AppContext);

    useEffect(() => {
    
    }, [productList]);

    function handleRemoveFromCartButton(event) {
        const filteredProducts = productList.filter((product, i) => i !== parseInt(event.target.id));
        setProductList(filteredProducts);
    }

    console.log(productList);

    return <div className="shopping-cart">
        <ul className="product-container">
                {productList && productList.map((product, index) => (
                    <div className="product-card" key={ index }>
                        <img src="" alt="" />
                        <div className="prodcut-info">
                            <h2 className="product-title">{ product.name }</h2>
                            <p className="product-description">{ product.description }</p>
                            <p className="product-rpice">{ product.price.toFixed(2) }$</p>
                            <button 
                                className="add-to-cart-button" 
                                id={ index } 
                                onClick={ handleRemoveFromCartButton } 
                            >Remove from cart</button>
                        </div>
                    </div>
                ))}
            </ul>
    </div>
};