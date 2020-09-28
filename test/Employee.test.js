const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via empName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.empName()).toBe(testValue);
});

test("Can get id via empId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.empId()).toBe(testValue);
});

test("Can get email via empEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.empEmail()).toBe(testValue);
});

test("empRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.empRole()).toBe(testValue);
});
