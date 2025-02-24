package org.example;

//@Component
public class  Dev {

    int age = 90;
    private Laptop laptop;

    public Laptop getLaptop() {
        return laptop;
    }

    public void setLaptop(Laptop laptop) {
        this.laptop = laptop;
    }

//    public Dev(int age){
//        this.age = age;
//        System.out.println("parameter applied");
//    }
    public Dev(Laptop l){
        this.laptop = l;
        System.out.println("laptop parameter applied");
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
