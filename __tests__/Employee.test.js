const Employee = require('../lib/Employee.js');

test('creates an employee object',()=>{
    const employee = new Employee('Jared',12345,'jared@gmail.com');
    
    expect(employee.name).toBe('Jared');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name",()=>{
    const employee = new Employee('Jared',12345,'jared@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
})

test("gets employee's email",()=>{
    const employee = new Employee('Jared',12345,'jared@gmail.com');
    expect(employee.getEmail()).toBe('jared@gmail.com');
});

test("gets employee's id",()=>{
    const employee = new Employee('Jared',12345,'jared@gmail.com');
    expect(employee.getId()).toBe(12345);
})

test("gets employee's role",()=>{
    const employee = new Employee('Jared',12345,'jared@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})