abstract class Department {
  static fiscalYear: number = 2020;
  protected employees: string[] = [];
  abstract describe(this: Department): void;

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
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
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
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
    if (this.lastReport) return this.lastReport;
    return "No report found.";
  }

  set updateLastReport(value: string) {
    if (!value) throw new Error("Please add a valid report.");
    this.addReport(value);
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
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
