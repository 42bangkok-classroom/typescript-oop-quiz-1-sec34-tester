# Quiz 12 - Temperature Hot/Normal
Create a TypeScript program that reads a temperature from the command line and prints whether it's hot or normal based on the temperature value.

## 📄 File to Submit
`temp.ts`

## 📘 Instructions
Write a program that:
1. Accepts one argument from the command line (temperature in Celsius).
2. Checks if the temperature is greater than 30:
   - If temperature > 30, print `Hot`
   - Otherwise, print `Normal`

## Example:
```
$ ts-node temp.ts 32
Hot
$ ts-node temp.ts 25
Normal
$ ts-node temp.ts 30
Normal
$ ts-node temp.ts 31
Hot
```