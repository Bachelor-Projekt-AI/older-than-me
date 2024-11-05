import { assertFalse } from "@std/assert";
import { Person } from "./src/classes/Person.ts";

Deno.test(function addTest() {
  const p1 = new Person("Alice", 30);
  const p2 = new Person("Bob", 25);

  assertFalse(p1.otherIsOlder(p2));
  assertFalse(!p1.otherIsYounger(p2));
});
