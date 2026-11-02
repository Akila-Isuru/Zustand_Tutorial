import { expect, test } from "@jest/globals";
import {sum} from "./sum.js";

test("first test", () => {
  expect(sum()).toBe(5);
});
