# BeerMP API :id=home

> Welcome to the BeerMP API documentation!

## Quick Start Guide

- [Download the latest version of the BeerMP API](https://maceeiko.dev/BeerMP_ref.zip)
- unzip the `BeerMP_ref.zip` and add the `BeerMP.dll` to your references
- get to coding!

if you don't know how to add references to your mod, check out [this tutorial](https://learn.microsoft.com/en-us/visualstudio/ide/managing-references-in-a-project)

!> next part is important for mods that should work even without BeerMP installed!

```csharp
var BeerMPInstalled = System.Environment.GetEnvironmentVariable("BeerMP-Present") != null;
if (BeerMPInstalled)
{
    // execute code to add sync here
}
```