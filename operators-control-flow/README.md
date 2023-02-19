# Operators and control flow

## Questions

1. List the symbols for each of the below Javascript operators

- Arithmetic Operators
  Examples of Arithmetic Operators:
  Addition Operator (+)
  Subtraction Operator (-)
  Multiplication Operator (\*)
  Exponentiation Operator (\*\*)
  Division Operator (/)
  Modulus Operator (Division Remainder) (%)
  Pre-Increment Operator (++x)
  Post-Increment Operator (x++)
  Pre-Decrement Operator (--x)
  Post-Decrement Operator (x--)

* Assignment Operators
  Assignment (=)
  Addition Assignment (+=)
  Subtraction Assignment (-=)
  Multiplication Assignment (\*=)
  Exponentiation Assignment (\*\*=)
  Division Assignment (/=)
  Modulus Assignment (%=)
* Comparison Operators
  Equals Comparison Operator (==)
  Identical Operator(Strict equality) (===)
  Not Equal (!=)
  Not Identical Operator (!==)
  Less Than (<)
  Greater Than (>)
  Less or equal to (<=)
  Greater Than or equal to (>=)
* Logical Operators
  AND Operator (&&)
  Logical OR Operator (||)
  Logical NOT Operator (!)
* Bitwise Operators
  - Bitwise AND Operator (&)
  - Bitwise OR Operator (|)
  - Bitwise XOR Operator (^)
  - Bitwise NOT Operator (~)
  - Bitwise Left Shift Operator (<<)
  - Bitwise Sign-Propagating Right Shift Operator (>>)
  - Unsigned Bitwise Right Shift Operator (>>>)

2. For each JavaScript Operator, write 2 examples.

- Arithmetic Operators

  - Examples:
  - a)
    ```
    let x = 10;
    let y = 3;
    console.log(x + y);
    ```
  - b)
    ```
    console.log(x - y);
    ```

- Assignment Operators
  - Example:
  - a)
    ```
    let x = 10;
    ```
  - b)
    ```
    x = x + 1;
    ```

* Comparison Operators
  - Example:
  - a)
    ```
    let x = 3;
    console.log( x >  0);
    ```
  - b)
    ```
    console.log(x === 1);
    ```
* Logical Operators
  - Example:
  - a)
    ```
    console.log(true && true);
    console.log (false && true);
    ```

- b)

  ```
  console.log(true || true);
  console.log(false || true);
  ```

- Bitwise Operators

  - Example:
  - a)

    ```
    let a = 30; //00000000000000000000000000011110
    let b = 6; //00000000000000000000000000000110

    console.log(a & b); //00000000000000000000000000000110 (6)
    ```

    - b)

    ```
    let a = 30; //00000000000000000000000000011110
    let b = 5; //00000000000000000000000000000101

    console.log(a | b); //00000000000000000000000000011111 (31)
    ```

4. What is the result when the following program is executed?

```
for(let i = 1; i < 20; i += 7) {
    console.log(i);
}
```

Answer:

```
1, 8, 15
```
