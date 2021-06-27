const Employee = require('./Employee');

// inherit Employee properties and methods here:
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }

    getSchool() {
        return this.school;
    }
    
    // Overwrite the getRole function to return Intern
    getRole() {
        return 'Intern';
    }
};

module.exports=Intern;