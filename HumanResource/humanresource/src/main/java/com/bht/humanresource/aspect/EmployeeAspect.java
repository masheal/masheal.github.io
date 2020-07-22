package com.bht.humanresource.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class EmployeeAspect {

    @Before("execution(* com.bht.humanresource.service.*.get*(..))")
    public void beforeGet () {
//        System.out.println("======Get Method is triggered=======");
    }
}
