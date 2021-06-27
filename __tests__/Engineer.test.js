const Engineer = require('../lib/Engineer');

test('creates an Engineer object',()=>{
    const engineer = new Engineer('Dave',12345,'Dave@gmail.com','DaveSmith21');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets Engineer's role",()=>{
    const engineer = new Engineer('Dave',12345,'Dave@gmail.com','DaveSmith21');
    expect(engineer.getRole()).toBe('Engineer');
})

test("gets Engineer's github username",()=>{
    const engineer = new Engineer('Dave',12345,'Dave@gmail.com','DaveSmith21');
    expect(engineer.getGithub()).toBe('DaveSmith21');
})