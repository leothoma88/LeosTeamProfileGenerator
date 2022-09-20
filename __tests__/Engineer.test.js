const Engineer = require("..Engineer");

test("GitHUb constructor", () => {
  const testValue = "leothoma88";
  const e = new Engineer("Darrell Thomas", 1, "leothoma88@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() ", () => {
  const testValue = "Engineer";
  const e = new Engineer("Darrell Thomas", 1, "leothoma88@gmail.com", "leothoma88");
  expect(e.getRole()).toBe(testValue);
});

test("getGithub()", () => {
  const testValue = "leothoma88";
  const e = new Engineer("Darrell Thomas", 1, "leothoma88", testValue);
  expect(e.getGithub()).toBe(testValue);
});