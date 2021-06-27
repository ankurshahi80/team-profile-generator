const Manager = require('../lib/Manager');

test('creates an Manager object',()=>{
    const manager = new Manager('Dave',12345,'Dave@gmail.com',21);
    
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's role",()=>{
    const manager = new Manager('Dave',12345,'Dave@gmail.com',21);
    expect(manager.getRole()).toBe('Manager');
})
