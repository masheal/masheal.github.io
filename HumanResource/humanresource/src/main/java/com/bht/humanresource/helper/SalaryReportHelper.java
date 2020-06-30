package com.bht.humanresource.helper;


import com.bht.humanresource.dao.SalaryReportRepository;
import com.bht.humanresource.model.SalaryReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.Optional;

@Component
public class SalaryReportHelper {

    @Autowired
    private SalaryReportRepository repo;

    public SalaryReport getSalaryReportByJob(String job) {
        Optional<SalaryReport> salaryReportOptional = repo.findByJob(job);
        if(!salaryReportOptional.isPresent()){
            createSalaryReport(job);
            return getSalaryReportByJob(job);
        }
        return salaryReportOptional.get();
    }

    @PersistenceContext
    private EntityManager entityManager;

    private void createSalaryReport (String job) {
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("spGenerateReport");
        query.registerStoredProcedureParameter(1, String.class, ParameterMode.IN);
        query.setParameter(1, job);
        query.execute();
    }

}
