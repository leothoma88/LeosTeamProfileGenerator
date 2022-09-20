const Manager = require("..Manager");

test("OfficeNumber", () => {
  const testValue = 1234;
  const e = new Manager("Darrell Thomas", 1, "leothoma88@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});


test("getOffice()", () => {
  const testValue = 1234;
  const e = new Manager("Darrell Thomas", 1, "leothoma88@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
})

test("getRole()", () => {
    const testValue = "Manager";
    const e = new Manager("Darrell Thomas", 1, "leothoma88@gmail.com", 1234);
    expect(e.getRole()).toBe(testValue);
  });
  