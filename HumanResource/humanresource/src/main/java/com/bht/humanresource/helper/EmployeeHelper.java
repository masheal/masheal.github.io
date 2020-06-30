package com.bht.humanresource.helper;

import com.bht.humanresource.dao.EmployeeRepository;
import com.bht.humanresource.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Component
public class EmployeeHelper {

    @Autowired
    private EmployeeRepository repo;


    public Employee getEmployeeById(int id) {
        Optional<Employee> employeeOptional = repo.findById(id);
        if(employeeOptional.isPresent()){
            return employeeOptional.get();
        }else{
            return null;
        }
    }


    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    /*public void createEmployee(Employee temp) {
        //TODO:: check the validity of temp;
        //TODO:: generate the unique id for the temp employee
        temp.setId(9999);
        temp.setDeptId(10);
        temp.setSalary(99999.00);
        repo.save(temp);
    }*/

    @Transactional
    public void createEmployee(Employee temp){
        temp.setId(9999);
        repo.create(temp.getId(), temp.getName());
    }

    public void updateEmployee(int id, Employee temp) {
        Optional<Employee> employeeOptional = repo.findById(id);
        if(!employeeOptional.isPresent()){
            return;
        }
        Employee employee = employeeOptional.get();
        employee.setName(temp.getName());
        repo.save(employee);
    }

    public void deleteEmployeeById(int id) {
       repo.deleteById(id);
    }

    /**
     * 1. findByDeptId
     * @param deptName
     * @return
     */
    public List<Employee> getEmployeeByDepartment(int deptName) {
        return repo.findAllByDeptId(deptName);
    }

    public List<Employee> getEmployeeByKeyword(String keyword) {
        List<Employee> res = repo.findAllByNameLikeIgnoreCase(keyword + '%');
        if (res.size() >= 3) {
            res = res.subList(0, 3);
        }
        return res;
    }
}
