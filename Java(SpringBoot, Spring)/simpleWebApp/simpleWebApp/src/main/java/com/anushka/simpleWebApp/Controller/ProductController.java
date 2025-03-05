package com.anushka.simpleWebApp.Controller;

import com.anushka.simpleWebApp.Model.Product;
import com.anushka.simpleWebApp.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
     public List<Product> getProducts(){
         return productService.getProducts();
     }

     @GetMapping("/products/{id}")
     public Product getProduct(@PathVariable int id){
        return productService.getProductsById(id);
     }

     @PostMapping("/products")
    public void add(@RequestBody Product p){
        System.out.println("product added successfully");
        productService.addProduct(p);
     }
}
