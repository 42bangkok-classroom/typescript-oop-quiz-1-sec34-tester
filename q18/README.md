# Quiz 18 - Alternating 1 and 0 Rows
Create a TypeScript program that reads a size from the command line and prints a pattern with alternating rows of 1s and 0s.

## 📄 File to Submit
`OneOrZero.ts`

## 📘 Instructions
Write a program that:
1. Accepts one argument from the command line (a number representing the size).
2. Prints a pattern with the specified number of rows, where:
   - Odd rows (1st, 3rd, 5th, etc.) contain all 1s
   - Even rows (2nd, 4th, 6th, etc.) contain all 0s
   - Each row has the same number of characters as the size

## Example:
```
$ ts-node OneOrZero.ts 5
11111
00000
11111
00000
11111
$ ts-node OneOrZero.ts 3
111
000
111
$ ts-node OneOrZero.ts 4
1111
0000
1111
0000
```

