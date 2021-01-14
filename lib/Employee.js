

class Employee {
    constructor(nameArg, idArg, emailArg) {
        this.role = "Employee";
        this.name = nameArg;
        this.id = idArg;
        this.email = emailArg;
    }
    
    getRole()   { return this.role; }
    getName()   { return this.name; }
    getId()     { return this.id;   }
    getEmail()  { return this.email;}
}

module.exports = Employee;