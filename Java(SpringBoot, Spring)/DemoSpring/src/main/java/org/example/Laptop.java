package org.example;

public class Laptop implements Computer {

    public Laptop(){
        System.out.println("laptop is running");
        System.out.println("laptop constructor");
    }

    public void compile(){
        System.out.println("i am working on laptop");
    }
}
