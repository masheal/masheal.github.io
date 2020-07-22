package com.bht.humanresource.controller;

import com.bht.humanresource.model.Department;
import com.bht.humanresource.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/department")
public class DepartmentController {

    private DepartmentService service;

    @RequestMapping(value="/all", method= RequestMethod.GET)
    public List<Department> getAllDepartments(){
        return service.getAllDepartments();
    }

    @GetMapping("/get/dept/{loc}")
    public List<Department> getDepartmentByLocation(@PathVariable String loc){
        return service.getDepartmentByLocation(loc);
    }

    @GetMapping("/get/{id}")
    public Department getDepartmentById(@PathVariable int id){
        return service.getDepartmentById(id);
    }

    @PutMapping("/update/{id}")
    public void updateDepartment(@PathVariable int id, @RequestBody Department temp){
        service.updateDepartment(id, temp);
    }

    @PostMapping("/new")
    public void createDepartment(@RequestBody Department temp){
        service.newDepartment(temp);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDepartmentById(@PathVariable int id){
        service.deleteDepartmentById(id);
    }




    public DepartmentService getService() {
        return service;
    }

    @Autowired
    public void setService(DepartmentService service) {
        this.service = service;
    }
}
