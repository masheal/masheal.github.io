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

    public List<Employee> getEmployeeByDeptId(int deptId) {
        return helper.getEmployeeByDeptId(deptId);
    }

    public List<Employee> getEmployeeByKeyword(String keyword, int num) {
        return helper.getEmployeeByKeyword(keyword, num);
    }

    public void increasePreformance(int id) {
        helper.increasePreformance(id);
    }

    public void decreasePreformance(int id) {
        helper.decreasePreformance(id);
    }

    public List<Employee> getEmployeeByPerformance(int num) {
        return helper.getEmployeeByPerformance(num);
    }
}
