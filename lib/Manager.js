const Employee = require('./Employee');

// inherit Employee properties and methods here:
class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    // Overwrite the getRole function to return Manager
    getRole() {
        return 'Manager';
    }
};

const manager = new Manager('Dave',12345,'dave@gmail.com',21);

module.exports = Manager;
