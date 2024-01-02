# ObjectUtilities

*Namespace: [BeerMP.Helpers](API/BeerMP/Helpers.md)*

### Description

these are the BeerMP Object Utilities.

### Static Functions

| Name                                  | Description                                                | Returns             |
| ------------------------------------- | ---------------------------------------------------------- | ------------------- |
| <method m="GetPlaymakerHash"/>        | get the hash for a PlayMakerFSM                            | <value v="int"/>    |
| <method m="GetGameobjectHashString"/> | get the hashstring for a GameObject (using it's Transform) | <value v="string"/> |
| <method m="IsPrefab"/>                | check if a GameObject is a prefab                          | <value v="bool"/>   |
| <method m="GetPath"/>                 | get the path to a Transform                                | <value v="string"/> |
| <method m="GetFullPath"/>             | get the full path to a Transform                           | <value v="string"/> |

### Examples

```csharp
using BeerMP.Helpers;

PlayMakerFSM someFSM;
var fsmHash = someFSM.GetPlaymakerHash();

GameObject someGameObject;
var gameObjectHashString = someGameObject.transform.GetGameobjectHashString();
var isPrefab = someGameObject.IsPrefab();
var path = someGameObject.transform.GetPath();
var fullpath = someGameObject.transform.GetFullPath();
```