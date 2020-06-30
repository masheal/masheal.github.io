package com.bht.humanresource.service;

import com.bht.humanresource.helper.DepartmentHelper;
import com.bht.humanresource.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentHelper helper;

    public Department getDepartmentById(int id) {
        return helper.getDepartmentById(id);
    }

    public List<Department> getAllDepartments() {
        return helper.getAllDepartments();
    }

    public void newDepartment(Department temp) {
        helper.createDepartment(temp);
    }

    public void updateDepartment(int id, Department temp) {
        helper.updateDepartment(id, temp);
    }

    public void deleteDepartmentById(int id) {
        helper.deleteDepartmentById(id);
    }

    public List<Department> getDepartmentByLocation(String loc) {
        return helper.getDepartmentByLocation(loc);
    }
}
