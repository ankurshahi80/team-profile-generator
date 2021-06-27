const Intern = require('../lib/Intern');

test('creates a new Intern object',()=>{
    const intern = new Intern('Dave',12345,'Dave@gmail.com','Univesity of Toronto');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("return intern's school",()=>{
    const intern = new Intern('Dave',12345,'Dave@gmail.com','Univesity of Toronto');

    expect(intern.getSchool()).toBe('Univesity of Toronto');
});

test("gets Intern's role",()=>{
    const intern = new Intern('Dave',12345,'Dave@gmail.com','Univesity of Toronto');
    expect(intern.getRole()).toBe('Intern');
})
