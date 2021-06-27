const Employee = require('./Employee');

// inherit Employee properties and methods here:
class Intern extends Employee{

    // Overwrite the getRole function to return Intern
    getRole() {
        return 'Intern';
    }
};