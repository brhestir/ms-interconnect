const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(nameArg, idArg, emailArg, schoolArg) {
        super(nameArg, idArg, emailArg);    // call employee constructor
        this.role = "Intern";
        this.school = schoolArg;
    }

    getSchool() { return this.school;   }
    getRole()   { return "Intern";      }
}

module.exports = Intern;