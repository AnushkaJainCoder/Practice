package com.example.ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Dev {

    @Autowired      // field injction
    @Qualifier("laptop")

//    private Laptop l;
      private Computer computer;

//    public Dev(Laptop l){       // constructor injection
//        this.l = l;
//    }

//    @Autowired
//    public void setLaptop(Laptop l){      // setter injection
//        this.l = l;
//    }

    public void build(){
        computer.start();
        System.out.println("Build Dev");
    }
}
