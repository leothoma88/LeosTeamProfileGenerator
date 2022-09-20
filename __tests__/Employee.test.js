const Employee = require(".Employee");

describe("Employee", () => {
    it("Empoyee Starter", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Name constructor", () => {
        const name = "Darrell Thomas";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Id constructor", () => {
        const testValue = 1234;
        const e = new Employee("Test", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Email constructor", () => {
        const testValue = "leothoma88@gmail.com";
        const e = new Employee("Test", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("getName()", () => {
            const testValue = "Darrell Thomas";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("getId()", () => {
            const testValue = 1234;
            const e = new Employee("Test", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "leothoma88@gmail.com";
            const e = new Employee("Test", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() = \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Darrell Thomas", 1, "leothoma88@gmail.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});