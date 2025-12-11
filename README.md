# @dep/assert 🛡️

> A comprehensive assertion library for JavaScript and TypeScript, providing
> type-safe and expressive assertions for testing and validation.

## [![JSR version](https://jsr.io/badges/@dep/assert)](https://jsr.io/@dep/assert)

## Features ✨

- 🧪 **Type-safe assertions** with automatic type narrowing in TypeScript
- 🔍 **Comprehensive matchers** for primitives, objects, arrays, maps, sets, and
  more
- 🚀 **Async support** with `assertResolves` and `assertRejects` utilities
- 🧩 **Combinators** like `assertAnyOf` and `assertNoneOf` for complex
  conditions
- 📝 **Structured errors** with detailed diagnostic information for debugging

---

## Installation 📦

- **Deno**:

  ```bash
  deno add @dep/assert
  ```

- **Node.js (18+) or Browsers**:

  ```bash
  npx jsr add @dep/assert
  ```

  Then import as an ES module:

  ```typescript
  import { assertArray, assertEqual, assertTruthy } from "@dep/assert";
  ```

---

## Usage 🎯

### API 🧩

```typescript
import {
  assertAnyOf,
  assertArray,
  assertContain,
  assertDeepEqual,
  assertEqual,
  assertGreaterThan,
  assertRejects,
  assertResolves,
  assertString,
  assertTruthy,
} from "@dep/assert";

// Basic type assertions
assertString("hello"); // Type narrowed to string
assertArray([1, 2, 3]); // Type narrowed to Array<unknown>

// Equality checks
assertEqual(42, 42);
assertDeepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [2, 3] });

// Numeric comparisons
assertGreaterThan(10, 5);
assertLessThanOrEqual(5, 10);

// Collection checks
assertContain([1, 2, 3], 2);
assertContain("hello world", "world");
assertContain(new Set([1, 2, 3]), 2);

// Length assertions
assertLength([1, 2, 3], 3);
assertLength("hello", 5);
assertLength(new Map([["a", 1]]), 1);

// Async assertions
await assertResolves(async () => {
  return await fetchData();
});

await assertRejects(async () => {
  throw new Error("Failed");
});

// Combinators
const value: unknown = getValue();
assertAnyOf(
  () => assertString(value),
  () => assertNumber(value),
  () => assertArray(value),
);

// Proximity checks
assertCloseTo(3.14159, 3.14, 0.01);

// Instance checks
assertInstanceOf(new Date(), Date);
assertDate(new Date());
```

### Custom Error Messages

```typescript
assertEqual(getUser().age, 25, "User should be 25 years old");

assertContain(getUser().roles, "admin", "User should have admin role");
```

### Structured Error Handling

```typescript
import { AssertionError } from "@dep/assert";

try {
  assertEqual(1, 2);
} catch (error) {
  if (error instanceof AssertionError) {
    console.error(error.code); // 'NOT_EQUAL'
    console.error(error.message); // 'Expected 1, but got 2'
    console.error(error.expected); // 2
    console.error(error.received); // 1
  }
}
```

---

## Available Assertions

### Type Assertions

- `assertArray` - Checks if value is an array
- `assertBigint` - Checks if value is a bigint
- `assertBoolean` - Checks if value is a boolean
- `assertDate` - Checks if value is a Date
- `assertFunction` - Checks if value is a function
- `assertMap` - Checks if value is a Map
- `assertNumber` - Checks if value is a number
- `assertObject` - Checks if value is a plain object
- `assertRecord` - Checks if value is a record
- `assertRegExp` - Checks if value is a RegExp
- `assertSet` - Checks if value is a Set
- `assertString` - Checks if value is a string
- `assertSymbol` - Checks if value is a symbol
- `assertThenable` - Checks if value is Promise-like

### Value Assertions

- `assertDefined` - Checks if value is not undefined
- `assertFalsy` - Checks if value is falsy
- `assertNaN` - Checks if value is NaN
- `assertNull` - Checks if value is null
- `assertTruthy` - Checks if value is truthy
- `assertUndefined` - Checks if value is undefined

### Comparison Assertions

- `assertEqual` - Strict equality (Object.is)
- `assertDeepEqual` - Deep equality for objects and arrays
- `assertCloseTo` - Numeric proximity within tolerance
- `assertGreaterThan` - Greater than comparison
- `assertGreaterThanOrEqual` - Greater than or equal comparison
- `assertLessThan` - Less than comparison
- `assertLessThanOrEqual` - Less than or equal comparison

### Collection Assertions

- `assertContain` - Checks if value contains element/key
- `assertLength` - Checks exact length/size
- `assertMatch` - String matches regular expression
- `assertInstanceOf` - Value is instance of constructor

### Utility Assertions

- `assertAnyOf` - At least one assertion passes
- `assertNoneOf` - No assertions pass
- `assertRejects` - Async function rejects
- `assertResolves` - Async function resolves
- `assertThrow` - Synchronous function throws

---

## TypeScript Integration

The library fully supports TypeScript's type narrowing:

```typescript
function processValue(value: unknown) {
  assertString(value); // Type is now narrowed to string
  console.log(value.toUpperCase()); // Safe!

  const data: unknown = getData();
  assertArray<number>(data); // Type is now Array<number>
  data.forEach((num) => console.log(num * 2)); // Safe!
}
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
