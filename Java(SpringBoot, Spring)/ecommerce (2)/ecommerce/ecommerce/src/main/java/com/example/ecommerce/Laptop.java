package com.example.ecommerce;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
//@Primary
public abstract class Laptop implements Computer {
    public void compile(){
        System.out.println("compiling.......");
    }
}
