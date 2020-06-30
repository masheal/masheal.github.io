package com.bht.humanresource.dao;

import com.bht.humanresource.model.SalaryReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.Optional;

@Repository
public interface SalaryReportRepository extends JpaRepository<SalaryReport, String> {

    Optional<SalaryReport> findByJob(String job);
}
