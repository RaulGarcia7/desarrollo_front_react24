import createUser from "./createUser";

test("Returns the object correctly", () => {
    const result = createUser("Raúl", 25);
    
    expect(result.name).toBe("Raúl");
    expect(result.age).toBe(25);
});