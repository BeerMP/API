# NetEvent<type>T</type>

*Namespace: [BeerMP.Networking](API/BeerMP/Networking.md)*

### Description

this is the BeerMP NetEvent class, it's used for every sync in BeerMP.

### Static Functions

| Name                   | Description          | Returns                          |
| ---------------------- | -------------------- | -------------------------------- |
| <method m="Register"/> | Registers a NetEvent | <class c=NetEvent><type>T</type> |
| <method m="Send"/>     | Sends a NetEvent     | <value v="void"/>                |

### Public Functions

| Name                     | Description            | Returns           |
| ------------------------ | ---------------------- | ----------------- |
| <method m="Unregister"/> | Unregisters a NetEvent | <value v="void"/> |
| <method m="Send"/>       | Sends a NetEvent       | <value v="void"/> |
| <method m="Dispose"/>    | Disposes a NetEvent    | <value v="void"/> |

### Examples

registering a NetEvent
```csharp
using BeerMP.Networking;

NetEvent<YourType> yourEvent;

yourEvent = NetEvent<YourType>.Register("YourEventName", yourEventHandler);

yourEventHandler(ulong sender, Packet packet)
{
    // read packet and do stuff
}
```

sending a NetEvent
```csharp
using BeerMP.Networking;

NetEvent<YourType> yourEvent;

using var _p = new Packet(); // create Packet without disabling Logging

// write Packet

// send to everyone
yourEvent.Send(_p); // send using the NetEvent instance
NetEvent<YourType>.Send("YourEventName", _p); // send using the static function

// send to specific client
yourEvent.Send(_p, targetHere); // send using the NetEvent instance
NetEvent<YourType>.Send("YourEventName", _p, targetHere); // send using the static function
```