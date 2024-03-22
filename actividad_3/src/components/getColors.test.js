import getColors from "./getColors";

test("Check blue is in the array", () => {
    const result = getColors();
    const isBluePresent = result.includes("blue");
    expect(isBluePresent).toBe(true);
});