// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(stringArg, numArg, emailArg, githubUsername) {
        this.role = "Engineer";
        this.github = githubUsername;
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;