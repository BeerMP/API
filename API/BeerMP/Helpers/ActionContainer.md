# ActionContainer

*Namespace: [BeerMP.Helpers](API/BeerMP/Helpers.md)*

### Description

ActionContainers work just like Actions, except they continue executing methods even if one throws and exception.

```csharp
// all ActionContainer classes there are in BeerMP
public class ActionContainer { add; remove; }
public class ActionContainer<T> { add; remove; }
public class ActionContainer<T1, T2> { add; remove; }
public class ActionContainer<T1, T2, T3> { add; remove; }
public class ActionContainer<T1, T2, T3, T4> { add; remove; }
```