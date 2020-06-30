package com.bht.humanresource.controller;

import com.bht.humanresource.model.SalaryReport;
import com.bht.humanresource.service.SalaryReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/salaryReport")
public class SalaryReportController {

    @Autowired
    private SalaryReportService salaryReportService;

    @GetMapping("/job/{job}")
    public SalaryReport getSalaryReportByJob (@PathVariable String job) {
        return salaryReportService.getSalaryReportByJob(job);
    }
}
