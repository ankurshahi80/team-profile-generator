const Employee = require('./Employee');

// inherit Employee properties and methods here:
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github=github;
    }

    // Overwrite the getRole function to return Engineer
    getRole() {
        return 'Engineer';
    }

    // add getGithub method
    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;