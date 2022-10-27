import { multiply, lowerCase } from "./index";

test("multiply", () => {
  expect(multiply(3, 3)).toBe(9);
  expect(multiply(5, -4)).toBe(-20);
  expect(multiply("a", 5)).toBe(NaN);
  expect(multiply(-3, -3)).toBe(9);
});

test("lowerCase", () => {
  expect(lowerCase("PEDro")).toBe("pedro");
  expect(lowerCase("SDSD")).toBe("sdsd");
});
