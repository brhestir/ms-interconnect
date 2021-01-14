const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(nameArg, idArg, emailArg, officeNum) {
        super(nameArg, idArg, emailArg);     // call employee constructor
        this.role = "Manager";
        this.officeNumber = officeNum;
    }
    
    getOfficeNumber()   { return this.officeNumber; }
}

module.exports = Manager;