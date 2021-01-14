const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(nameArg, idArg, emailArg, githubUsername) {
        super(nameArg, idArg, emailArg);    // call Employee constructor
        this.role = "Engineer";
        this.github = githubUsername;
    }
    
    getGithub() { return this.github; }
}

module.exports = Engineer;