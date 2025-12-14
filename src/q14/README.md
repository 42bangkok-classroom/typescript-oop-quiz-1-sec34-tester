# Quiz 14 - Print Even Numbers from 0 to N
Create a TypeScript program that reads a number from the command line and prints all even numbers from 0 to that number (inclusive). The program should show nothing if the input is not a valid number.

## 📄 File to Submit
`Even.ts`

## 📘 Instructions
Write a program that:
1. Accepts one argument from the command line (a number N).
2. Validates the input:
   - Must be a valid number
3. If the input is valid, prints all even numbers from 0 to N (inclusive), each on a new line.
4. If the input is invalid or missing, prints nothing.

## Example:
```
$ ts-node Even.ts 10
0
2
4
6
8
10
$ ts-node Even.ts 5
0
2
4
$ ts-node Even.ts ABC

$ ts-node Even.ts

```