package org.example;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext context = new ClassPathXmlApplicationContext( "spring.xml");
        Dev d =(Dev) context.getBean("dev");
        d.build();
//        System.out.println( "Hello World!" );
    }
}
