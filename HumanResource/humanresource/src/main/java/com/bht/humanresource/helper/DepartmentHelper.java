package com.bht.humanresource.helper;

import com.bht.humanresource.dao.DepartmentRepository;
import com.bht.humanresource.model.Department;
import com.bht.humanresource.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Component
public class DepartmentHelper {

    @Autowired
    private DepartmentRepository repo;

    public Department getDepartmentById (int id) {
        Optional<Department> departmentOptional = repo.findById(id);
        if(departmentOptional.isPresent()){
            return departmentOptional.get();
        }else{
            return null;
        }
    }

    public List<Department> getAllDepartments() {
        return repo.findAll();
    }

    @Transactional
    public void createDepartment(Department temp){
        int id = temp.getId();
        while (getDepartmentById(id) != null) {
            id++;
        }
        repo.create(id, temp.getName(), temp.getLoc());
    }

    public void updateDepartment(int id, Department temp) {
        Optional<Department> departmentOptional = repo.findById(id);
        if(!departmentOptional.isPresent()){
            return;
        }
        Department department = departmentOptional.get();
        if (temp.getName() != null) {
            department.setName(temp.getName());
        }
        if (temp.getLoc() != null) {
            department.setLoc(temp.getLoc());
        }
        repo.save(department);
    }

    public void deleteDepartmentById(int id) {
        repo.deleteById(id);
    }

    public List<Department> getDepartmentByLocation(String loc) {
        return repo.findAllByLoc(loc);
    }
}
