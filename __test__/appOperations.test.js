const appOperations = require('../src/appOperations');

test("multiplication property of zero", () => {
    expect(appOperations.multiply(5, 0)).toBe(0);
})

test("adding two values", () => {
    expect(appOperations.add(7, 4)).toBe(11);
})
