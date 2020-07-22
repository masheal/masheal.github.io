package com.bht.humanresource.service;

import com.bht.humanresource.model.Employee;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeServiceTest {

    @Autowired
    EmployeeService service;

    @Before
    public void beforeTest () {
        System.out.println("test service class: begin");
    }

    @After
    public void afterTest () {
        System.out.println("test service class: end");
    }

    @Test
    public void testGetEmployeeById () throws Exception {
        System.out.println("testGetEmployeeById begin");
        int id = 1210;
        Employee employee = service.getEmployeeById(id);
        Assert.assertEquals("BATMAN", employee.getName());
        System.out.println("testGetEmployeeById end");
    }
}
