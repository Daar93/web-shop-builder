package com.crusty.stars.webshop.api.userProduct;

import com.crusty.stars.webshop.model.UserProduct;
import com.crusty.stars.webshop.model.UserProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-products")
public class UserProductEndpoint {

    @Autowired
    private UserProductRepository userProductRepository;

    // Create a new user product
    @PostMapping
    public UserProduct createUserProduct(@RequestBody UserProduct userProduct) {
        return userProductRepository.save(userProduct);
    }

    // Get all user products
    @GetMapping
    public List<UserProduct> getAllUserProducts() {
        return userProductRepository.findAll();
    }

    // Get user products by user ID
    @GetMapping("/user/{userId}")
    public List<UserProduct> getUserProductsByUserId(@PathVariable Long userId) {
        return userProductRepository.findByUser_Id(userId);
    }

    // Get user products by product ID
    @GetMapping("/product/{productId}")
    public List<UserProduct> getUserProductsByProductId(@PathVariable Long productId) {
      return userProductRepository.findByProduct_Id(productId);
    }

    // Update a user product
    @PutMapping("/{userProductId}")
    public UserProduct updateUserProduct(@PathVariable Long userProductId, @RequestBody UserProduct userProduct) {
        // TODO:
        //  Implement update logic
        return null;
    }

    // Delete a user product
    @DeleteMapping("/{userProductId}")
    public void deleteUserProduct(@PathVariable Long userProductId) {
        userProductRepository.deleteById(userProductId);
    }
}
