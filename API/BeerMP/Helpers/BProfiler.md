# BProfiler

*Namespace: [BeerMP.Helpers](API/BeerMP/Helpers.md)*

### Description

this is the BeerMP Profiler.

### Static Functions

| Name                 | Description                    | Returns           |
| -------------------- | ------------------------------ | ----------------- |
| <method m="Attach"/> | attach the Profiler to a class | <value v="void"/> |

### Examples

```csharp
using BeerMP.Helpers;

BProfiler.Attach(typeof(MyTargetType), attachNestedTypes: false); // attaches nested types by default.

// example of a nested type:
internal class MyTargetType
{
    class MyNestedType
    {
        // type stuff
    }

    // type stuff
}
```