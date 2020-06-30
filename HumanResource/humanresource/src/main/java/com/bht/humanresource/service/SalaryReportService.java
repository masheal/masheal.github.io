package com.bht.humanresource.service;

import com.bht.humanresource.helper.SalaryReportHelper;
import com.bht.humanresource.model.SalaryReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalaryReportService {

    @Autowired
    private SalaryReportHelper salaryReportHelper;

    public SalaryReport getSalaryReportByJob(String job) {
        return salaryReportHelper.getSalaryReportByJob(job);
    }
}
