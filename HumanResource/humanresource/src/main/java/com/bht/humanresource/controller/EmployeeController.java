package com.bht.humanresource.controller;

import com.bht.humanresource.model.Employee;
import com.bht.humanresource.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    private EmployeeService service;

    @RequestMapping(value="/all", method= RequestMethod.GET)
    public List<Employee> getEmployees(){
        return service.getAllEmployees();
    }

    @GetMapping("/get/dept/{deptname}")
    public List<Employee> getEmployeeByDeptName(@PathVariable int deptname){
        return service.getEmployeeByDepartment(deptname);
    }

    @GetMapping("/get/{id}")
    public Employee getEmployeeById(@PathVariable int id){
        return service.getEmployeeById(id);
    }

    @GetMapping("/get/search/name/{keyword}")
    public List<Employee> getEmployeeByKeyword(@PathVariable String keyword){
        return service.getEmployeeByKeyword(keyword);
    }

    @PutMapping("/update/{id}")
    public void updateEmployee(@PathVariable int id, @RequestBody Employee temp){
        service.updateEmployee(id, temp);
    }

    @PostMapping("/new")
    public void updateEmployee(@RequestBody Employee temp){
        service.newEmployee(temp);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployeeById(@PathVariable int id){
        service.deleteEmployeeById(id);
    }




    public EmployeeService getService() {
        return service;
    }

    @Autowired
    public void setService(EmployeeService service) {
        this.service = service;
    }
}
