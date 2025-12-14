# Quiz 19 - Row Number Repetition
Create a TypeScript program that reads a size from the command line and prints a pattern where each row contains the row number repeated the specified number of times.

## 📄 File to Submit
`NumberRepetition.ts`

## 📘 Instructions
Write a program that:
1. Accepts one argument from the command line (a number representing the size).
2. Prints a pattern with the specified number of rows, where:
   - Row 1 contains the digit 1 repeated size times
   - Row 2 contains the digit 2 repeated size times
   - Row 3 contains the digit 3 repeated size times
   - This pattern continues up to the row number equal to the size

## Example:
```
$ ts-node NumberRepetition.ts 5
11111
22222
33333
44444
55555
$ ts-node NumberRepetition.ts 3
111
222
333
$ ts-node NumberRepetition.ts 4
1111
2222
3333
4444
```

