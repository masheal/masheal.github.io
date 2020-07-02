package com.bht.humanresource.dao;

import com.bht.humanresource.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Modifying
    @Query(value="insert into employee(empid, name, job, manager, hiredate, salary, deptid, performance) values (:empid, :name, :job, :manager, :hiredate, :salary, :deptid, :performance)", nativeQuery = true)
    void create(@Param("empid") int empid,
                @Param("name") String name,
                @Param("job") String job,
                @Param("manager") Integer manager,
                @Param("hiredate") Date hiredate,
                @Param("salary") Double salary,
                @Param("deptid") int deptid,
                @Param("performance") int performance);

    List<Employee> findAllByDeptId(int deptName);

    List<Employee> findAllByNameLikeIgnoreCase(String keyword);

    @Modifying
    @Query(value="UPDATE employee SET performance = performance + 1 WHERE empid = :id", nativeQuery = true)
    void increase(@Param("id") int id);

    @Modifying
    @Query(value="UPDATE employee SET performance = performance - 1 WHERE empid = :id", nativeQuery = true)
    void decrease(int id);

    List<Employee> findAllByOrderByPerformanceDesc();
}
