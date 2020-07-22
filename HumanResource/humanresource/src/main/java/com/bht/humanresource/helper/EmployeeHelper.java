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
        int id = temp.getId();
        while (getEmployeeById(id) != null) {
            id++;
        }
        repo.create(id, temp.getName(), temp.getJob(), temp.getManager(), temp.getHireDate(), temp.getSalary(), temp.getDeptId(), temp.getPerformance());
    }

    public void updateEmployee(int id, Employee temp) {
        Optional<Employee> employeeOptional = repo.findById(id);
        if(!employeeOptional.isPresent()){
            return;
        }
        Employee employee = employeeOptional.get();
        if (temp.getName() != null) {
            employee.setName(temp.getName());
        }
        if (temp.getJob() != null) {
            employee.setJob(temp.getJob());
        }
        if (temp.getManager() != null) {
            employee.setManager(temp.getManager());
        }
        if (temp.getHireDate() != null) {
            employee.setHireDate(temp.getHireDate());
        }
        if (temp.getSalary() != null) {
            employee.setSalary(temp.getSalary());
        }
        if (temp.getDeptId() != null) {
            employee.setDeptId(temp.getDeptId());
        }
        repo.save(employee);
    }

    public void deleteEmployeeById(int id) {
       repo.deleteById(id);
    }

    public List<Employee> getEmployeeByDeptId(int deptId) {
        return repo.findAllByDeptId(deptId);
    }

    public List<Employee> getEmployeeByKeyword(String keyword, int num) {
        List<Employee> res = repo.findAllByNameLikeIgnoreCase(keyword + '%');
        if (num > 0 && res.size() >= num) {
            res = res.subList(0, num);
        }
        return res;
    }

    @Transactional
    public void increasePreformance(int id) {
        repo.increase(id);
    }

    @Transactional
    public void decreasePreformance(int id) {
        repo.decrease(id);
    }

    public List<Employee> getEmployeeByPerformance(int num) {
        List<Employee> list = repo.findAllByOrderByPerformanceDesc();
        return num == 0 ? list : list.subList(0, num);
    }
}
