package com.crusty.stars.webshop.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserProductRepository extends JpaRepository<UserProduct, Long> {
    List<UserProduct> findByUser_Id(Long userId);
    List<UserProduct> findByProduct_Id(Long productId);

}
