"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static fetchInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d1", []);
        return this.instance;
    }
    get readLastReport() {
        if (this.lastReport)
            return this.lastReport;
        return "No report found.";
    }
    set updateLastReport(value) {
        if (!value)
            throw new Error("Please add a valid report.");
        this.addReport(value);
    }
    describe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }
    addEmployee(employee) {
        if (employee === "Max")
            return;
        this.employees.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID: ${this.id}`);
    }
    printAdmins() {
        console.log(this.admins);
    }
}
console.log("--------------Classes--------------");
console.log(Department.fiscalYear);
const employee1 = Department.createEmployee("Max");
console.log(employee1);
const accounting = AccountingDepartment.fetchInstance();
console.log(`Last Report: ${accounting.readLastReport}`);
accounting.updateLastReport = "Year Mid Report";
console.log(`Last Report: ${accounting.readLastReport}`);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addEmployee("Anna");
accounting.name = "Accounting & Finance";
accounting.addReport("Something went wrong");
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();
console.log(`Last Report: ${accounting.readLastReport}`);
const infoTech = new ITDepartment("d2", ["Harry"]);
infoTech.addEmployee("Harry");
infoTech.addEmployee("Zuck");
infoTech.addEmployee("Larry");
infoTech.name = "Information Technology";
infoTech.describe();
infoTech.printEmployeeInformation();
infoTech.printAdmins();
//# sourceMappingURL=classes.js.map