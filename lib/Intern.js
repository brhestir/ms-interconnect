const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(stringArg, numArg, emailArg, schoolArg) {
        super(stringArg, numArg, emailArg);    // call employee constructor
        this.role = "Intern";
        this.school = schoolArg;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;