import getColors2 from "./getColors2";

describe("getColors2", () => {
    test("Array has 2 elements", () => {
        const result = getColors2();
        const arrayLength = result.length;
        expect(arrayLength).toBe(2)
    });

    test("Blue does not exists", () => {
        const result = getColors2();
        const isBluePresent = result.includes("blue");
        expect(isBluePresent).toBe(false);
    });

});
