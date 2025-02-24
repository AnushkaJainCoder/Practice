package org.example;

//@Component
public class  Dev {

    int age = 90;
    public Dev(int age){
        this.age = age;
        System.out.println("parameter applied");
    }
    public Dev(){
        System.out.println("no parameter");
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void build(){
        System.out.println("'start....'");
    }
}
