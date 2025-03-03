package com.anushka.simpleWebApp.Service;

import com.anushka.simpleWebApp.Model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {

    List<Product> products = new ArrayList<>(Arrays.asList(
            new Product(1, "Milk", 30),
            new Product(2, "Chocolate", 50)));

    public List<Product> getProducts(){
        return products;
    }



    public Product getProductsById(int prodid) {
//        return products.stream().filter(p -> p.getProdId() == prodid).findFirst().get();
        return products.stream().filter(p -> p.getProdId() == prodid).findFirst()
                .orElse(new Product(190, "No such item", 0));

    }

    public void addProduct(Product p) {
        products.add(p);
    }
}
