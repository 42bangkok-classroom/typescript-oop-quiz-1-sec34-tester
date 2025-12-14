# Quiz 11 - String Contains @
Create a TypeScript program that checks if a given string contains the `@` character and prints the appropriate message.

## 📄 File to Submit
`hasAt.ts`

## 📘 Instructions
Write a program that:
1. Accepts one argument from the command line (a string).
2. Checks if the string contains the `@` character.
3. Prints `Has @` if the string contains `@`, otherwise prints `No @`.

## Example:
```
$ ts-node hasAt.ts hello@example.com
Has @
$ ts-node hasAt.ts hello
No @
$ ts-node hasAt.ts test@
Has @
$ ts-node hasAt.ts @test
Has @
```

