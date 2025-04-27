import { assertEquals } from "jsr:@std/assert";
import {
  caseConverterInputSchema,
  textLowerCase,
  textUpperCase,
} from "./text-case-converter.ts";

Deno.test("caseConverterInputSchema validates correctly", () => {
  // Valid input
  const validResult = caseConverterInputSchema.safeParse({
    text: "HELLO WORLD",
  });
  assertEquals(validResult.success, true);

  // Invalid input (missing text property)
  const invalidResult = caseConverterInputSchema.safeParse({});
  assertEquals(invalidResult.success, false);
});

Deno.test("textLowerCase converts text to lowercase", () => {
  // Test with uppercase text
  const uppercaseResult = textLowerCase.cb({ text: "HELLO WORLD" });
  assertEquals(uppercaseResult.content[0].text, "hello world");

  // Test with mixed case text
  const mixedCaseResult = textLowerCase.cb({ text: "Hello World" });
  assertEquals(mixedCaseResult.content[0].text, "hello world");

  // Test with already lowercase text
  const lowercaseResult = textLowerCase.cb({ text: "hello world" });
  assertEquals(lowercaseResult.content[0].text, "hello world");

  // Test with special characters and numbers
  const specialResult = textLowerCase.cb({ text: "HELLO 123 WORLD!" });
  assertEquals(specialResult.content[0].text, "hello 123 world!");
});

Deno.test("textUpperCase converts text to uppercase", () => {
  // Test with lowercase text
  const lowercaseResult = textUpperCase.cb({ text: "hello world" });
  assertEquals(lowercaseResult.content[0].text, "HELLO WORLD");

  // Test with mixed case text
  const mixedCaseResult = textUpperCase.cb({ text: "Hello World" });
  assertEquals(mixedCaseResult.content[0].text, "HELLO WORLD");

  // Test with already uppercase text
  const uppercaseResult = textUpperCase.cb({ text: "HELLO WORLD" });
  assertEquals(uppercaseResult.content[0].text, "HELLO WORLD");

  // Test with special characters and numbers
  const specialResult = textUpperCase.cb({ text: "hello 123 world!" });
  assertEquals(specialResult.content[0].text, "HELLO 123 WORLD!");
});
