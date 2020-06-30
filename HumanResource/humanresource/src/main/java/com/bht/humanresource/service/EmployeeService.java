package com.bht.humanresource.service;

import com.bht.humanresource.helper.EmployeeHelper;
import com.bht.humanresource.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeHelper helper;

    public Employee getEmployeeById(int id) {
        return helper.getEmployeeById(id);
    }

    public List<Employee> getAllEmployees() {
        return helper.getAllEmployees();
    }

    public void newEmployee(Employee temp) {
        helper.createEmployee(temp);
    }

    public void updateEmployee(int id, Employee temp) {
        helper.updateEmployee(id, temp);
    }

    public void deleteEmployeeById(int id) {
        helper.deleteEmployeeById(id);
    }

    public List<Employee> getEmployeeByDepartment(int deptName) {
        return helper.getEmployeeByDepartment(deptName);
    }

    public List<Employee> getEmployeeByKeyword(String keyword) {
        return helper.getEmployeeByKeyword(keyword);
    }
}
