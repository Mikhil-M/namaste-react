import { sum } from "../sum";

test("Sum function sould calculate the sum of two numbers", () => {
  const result = sum(2, 5);

  expect(result).toBe(7);
});