const Employee = require('./Employee');

// inherit Employee properties and methods here:
class Engineer extends Employee{

    // Overwrite the getRole function to return Engineer
    getRole() {
        return 'Engineer';
    }
};