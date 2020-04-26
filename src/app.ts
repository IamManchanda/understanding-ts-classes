class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get readLastReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found.");
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(employee: string) {
    if (employee === "Max") return;
    this.employees.push(employee);
  }
  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  printReports() {
    console.log(this.reports);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  printAdmins() {
    console.log(this.admins);
  }
}

const accounting = new AccountingDepartment("d1", []);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addEmployee("Anna");
accounting.name = "Accounting & Finance";
accounting.addReport("Something went wrong");
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();

const infoTech = new ITDepartment("d2", ["Harry"]);
infoTech.addEmployee("Harry");
infoTech.addEmployee("Zuck");
infoTech.addEmployee("Larry");
infoTech.name = "Information Technology";
infoTech.describe();
infoTech.printEmployeeInformation();
infoTech.printAdmins();

/* 
const accountingCopy = {
  name: "Accounting 2",
  describe: accounting.describe,
};

accountingCopy.describe(); 
*/
