const Intern = require(".Intern");

test("School constructor", () => {
  const testValue = "KSU";
  const e = new Intern("Darrell Thomas", 1, "leothoma88@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole()", () => {
  const testValue = "Intern";
  const e = new Intern("Darrell Thomas", 1, "leothoma88@gmail.com", "KSU");
  expect(e.getRole()).toBe(testValue);
});

test("getSchool()", () => {
  const testValue = "KSU";
  const e = new Intern("Darrell Thomas", 1, "leothoma88@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});