const sum = require('../model/sum.js')

test("Add two numbers", () => {
    expect(sum(1, 2)).toBe(3)
})