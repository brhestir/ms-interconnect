// TODO: Write code to define and export the Employee class
class Employee {
    constructor(nameArg, idArg, emailArg) {
        this.role = "Employee";
        this.name = nameArg;
        this.id = idArg;
        this.email = emailArg;
    }
    
    getName()   { return this.name; }
    getId()     { return this.id;   }
    getRole()   { return this.role; }
    getEmail()  { return this.email;}

}

module.exports = Employee;