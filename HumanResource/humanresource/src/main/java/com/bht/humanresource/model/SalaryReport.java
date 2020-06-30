package com.bht.humanresource.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "salary_report")
public class SalaryReport {

    @Id
    @Column(name = "job")
    private String job;

    private String department;
    private int empcount;
    private float salavg;
    private float salmax;
    private float salmin;
    private float saltotal;
    private Date updatetime;

    public SalaryReport() {
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public int getEmpcount() {
        return empcount;
    }

    public void setEmpcount(int empcount) {
        this.empcount = empcount;
    }

    public float getSalavg() {
        return salavg;
    }

    public void setSalavg(float salavg) {
        this.salavg = salavg;
    }

    public float getSalmax() {
        return salmax;
    }

    public void setSalmax(float salmax) {
        this.salmax = salmax;
    }

    public float getSalmin() {
        return salmin;
    }

    public void setSalmin(float salmin) {
        this.salmin = salmin;
    }

    public float getSaltotal() {
        return saltotal;
    }

    public void setSaltotal(float saltotal) {
        this.saltotal = saltotal;
    }

    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }
}
