# NetRigidbodyManager

*Namespace: [BeerMP.Networking.Managers](API/BeerMP/Networking/Managers.md)*

### Description

this is the BeerMP NetRigidbodyManager, it's responsible for syncing Rigidbodies.

### Static Functions

| Name                            | Description                                       | Returns                                                                                            |
| ------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <method m="AddRigidbody"/>      | register a Rigidbody to the manager               | [<class c="OwnedRigidbody">](API/BeerMP/Networking/Managers/NetRigidbodyManager/OwnedRigidbody.md) |
| <method m="GetOwnedRigidbody"/> | get an OwnedRigidbody from the manager            | [<class c="OwnedRigidbody">](API/BeerMP/Networking/Managers/NetRigidbodyManager/OwnedRigidbody.md) |
| <method m="GetRigidbody"/>      | get a Rigidbody from the manager                  | <class c="Rigidbody"/>                                                                             |
| <method m="GetRigidbodyHash"/>  | get a Rigidbody hash from the manager             | <value v="int"/>                                                                                   |
| <method m="RequestOwnership"/>  | request ownership of a rigidbody from the manager | <value v="void"/>                                                                                  |

### Examples

```csharp
using BeerMP.Networking.Managers;

Rigidbody itemRigidbody;
int itemHash;

// create some item and get the rigidbody
// create unique hash with your item name and id

itemOwnedRigidbody = NetRigidbodyManager.AddRigidbody(itemRigidbody, itemHash); // add your item's rigidbody to the Manager

itemOwnedRigidbody = NetRigidbodyManager.GetOwnedRigidbody(itemHash); // get the item's OwnedRigidbody using the hash
itemRigidbody = NetRigidbodyManager.GetRigidbody(itemHash); // get the item's Rigidbody using the hash

itemHash = NetRigidbodyManager.GetRigidbodyHash(itemRigidbody); // get the Rigidbody hash using the item's Rigidbody

NetRigidbodyManager.RequestOwnership(itemRigidbody) // request ownership of the item's Rigidbody
```