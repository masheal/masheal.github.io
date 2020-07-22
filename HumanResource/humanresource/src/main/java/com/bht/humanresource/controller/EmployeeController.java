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
    public List<Employee> getAllEmployees(){
        return service.getAllEmployees();
    }

    @GetMapping("/get/dept/{deptId}")
    public List<Employee> getEmployeeByDeptId(@PathVariable int deptId){
        return service.getEmployeeByDeptId(deptId);
    }

    @GetMapping("/get/{id}")
    public Employee getEmployeeById(@PathVariable int id){
        return service.getEmployeeById(id);
    }

    @GetMapping("/get/search/name/{keyword}/{num}")
    public List<Employee> getEmployeeByKeyword(@PathVariable String keyword, @PathVariable int num){
        return service.getEmployeeByKeyword(keyword, num);
    }

    @GetMapping("/get/performance/{num}")
    public List<Employee> getEmployeeByPerformance(@PathVariable int num){
        return service.getEmployeeByPerformance(num);
    }

    @PutMapping("/update/{id}")
    public void updateEmployee(@PathVariable int id, @RequestBody Employee temp){
        service.updateEmployee(id, temp);
    }

    @PutMapping("/update/incrementPreformance/{id}")
    public void increasePreformance (@PathVariable int id) {
        service.increasePreformance(id);
    }

    @PutMapping("/update/decreasePerformance/{id}")
    public void decreasePreformance (@PathVariable int id) {
        service.decreasePreformance(id);
    }

    @PostMapping("/new")
    public void createEmployee(@RequestBody Employee temp){
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
