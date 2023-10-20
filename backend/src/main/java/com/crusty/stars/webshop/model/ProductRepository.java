package com.crusty.stars.webshop.model;

import com.crusty.stars.webshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <Product,Long> {
}
