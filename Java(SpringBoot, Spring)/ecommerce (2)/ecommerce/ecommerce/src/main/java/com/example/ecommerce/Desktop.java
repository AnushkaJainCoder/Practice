package com.example.ecommerce;

import org.springframework.stereotype.Component;

@Component
public abstract class Desktop implements Computer {
    public void compile(){
        System.out.println("compiling.......");
    }
}
