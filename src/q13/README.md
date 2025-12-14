# Quiz 13 - Traffic Light Action
Create a TypeScript program that reads a traffic light color from the command line and prints the corresponding action. The program should handle case-insensitive input and show an appropriate message for unknown colors.

## 📄 File to Submit
`light.ts`

## 📘 Instructions
Write a program that:
1. Accepts one argument from the command line (traffic light color).
2. Converts the input to lowercase for case-insensitive comparison.
3. Prints the corresponding action based on the color:
   - `red` → `Stop`
   - `yellow` → `Caution`
   - `green` → `Go`
   - Any other value (including empty string) → `Unknown`

### Color Rules
| Color  | Action   |
| ------ | -------- |
| red    | Stop     |
| yellow | Caution  |
| green  | Go       |
| other  | Unknown  |

## Example:
```
$ ts-node light.ts red
Stop
$ ts-node light.ts Red
Stop
$ ts-node light.ts RED
Stop
$ ts-node light.ts ""
Unknown
$ ts-node light.ts blue
Unknown
```

