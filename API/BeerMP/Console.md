# Console

*Namespace: [BeerMP](API/BeerMP.md)*

### Description

Console handler.

### Static Functions

| Name                     | Description    | Returns           |
| ------------------------ | -------------- | ----------------- |
| <method m="Log"/>        | Logs a Message | <value v="void"/> |
| <method m="LogWarning"/> | Logs a Warning | <value v="void"/> |
| <method m="LogError"/>   | Logs an Error  | <value v="void"/> |

### Examples

```csharp
using BeerMP;

// all of the Log functions write to the BeerMP_output_log.txt file in the My Summer Car directory

Console.Log("Hello World!"); // shows in console by default
Console.LogWarning("Hello World!") // shows in console by default
Console.LogError("Hello World!", show: true) // doesn't show in console by default
```