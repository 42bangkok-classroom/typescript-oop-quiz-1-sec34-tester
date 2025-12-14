# Quiz 16 - Validate Password Rules
Create a TypeScript program that reads a password from the command line and validates it against specific rules. The program should print `Valid` if all rules are met, otherwise print `Invalid`.

## 📄 File to Submit
`ValidatePass.ts`

## 📘 Instructions
Write a program that:
1. Accepts one argument from the command line (a password string).
2. Validates the password against the following rules:
   - Length must be at least 8 characters
   - Must contain at least one number
   - Must contain at least one uppercase letter
3. Prints `Valid` if all rules are satisfied, otherwise prints `Invalid`.

### Password Rules
| Rule                    | Requirement        |
| ----------------------- | ------------------ |
| Length                  | ≥ 8 characters     |
| Contains number         | At least one digit |
| Contains uppercase      | At least one uppercase letter |

## Example:
```
$ ts-node ValidatePass.ts "Hello123"
Valid
$ ts-node ValidatePass.ts "hello123"
Invalid
$ ts-node ValidatePass.ts "Hello"
Invalid
$ ts-node ValidatePass.ts "HELLO123"
Invalid
$ ts-node ValidatePass.ts "Pass1234"
Valid
```

