package com.bht.humanresource.dao;

import com.bht.humanresource.model.Department;
import com.bht.humanresource.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {

    @Modifying
    @Query(value="insert into department(deptid, name, loc) values (:id, :name, :loc)", nativeQuery = true)
    void create(@Param("id") int id, @Param("name") String name, @Param("loc") String loc);

    List<Department> findAllByLoc(String loc);
}
