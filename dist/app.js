"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "readLastReport", {
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            return "No report found.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "updateLastReport", {
        set: function (value) {
            if (!value)
                throw new Error("Please add a valid report.");
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === "Max")
            return;
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.printAdmins = function () {
        console.log(this.admins);
    };
    return ITDepartment;
}(Department));
console.log(Department.fiscalYear);
var employee1 = Department.createEmployee("Max");
console.log(employee1);
var accounting = new AccountingDepartment("d1", []);
console.log("Last Report: " + accounting.readLastReport);
accounting.updateLastReport = "Year Mid Report";
console.log("Last Report: " + accounting.readLastReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addEmployee("Anna");
accounting.name = "Accounting & Finance";
accounting.addReport("Something went wrong");
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();
console.log("Last Report: " + accounting.readLastReport);
var infoTech = new ITDepartment("d2", ["Harry"]);
infoTech.addEmployee("Harry");
infoTech.addEmployee("Zuck");
infoTech.addEmployee("Larry");
infoTech.name = "Information Technology";
infoTech.describe();
infoTech.printEmployeeInformation();
infoTech.printAdmins();
//# sourceMappingURL=app.js.map