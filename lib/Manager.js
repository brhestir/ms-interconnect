const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(nameArg, idArg, emailArg, officeNum) {
        super(nameArg, idArg, emailArg);     // call employee constructor
        this.officeNumber = officeNum;
    }
    
    getOfficeNumber()   { return this.officeNumber; }

    getRole()           { return "Manager"; }
}

module.exports = Manager;