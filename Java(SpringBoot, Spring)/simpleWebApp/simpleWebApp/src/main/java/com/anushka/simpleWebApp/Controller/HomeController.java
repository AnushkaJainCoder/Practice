package com.anushka.simpleWebApp.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    public String greet(){
        return "Hello Anushka, you are the best";
    }

    @RequestMapping("/about")
    public String about(){
        return "Anushka you nailed it, you are on about page";
    }
}
