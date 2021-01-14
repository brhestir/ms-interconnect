// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(stringArg, numArg, emailArg, officeNum){
        this.role = "Manager";
        this.officeNumber = officeNum;
    }
    
    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;