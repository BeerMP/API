# Packet

*Namespace: [BeerMP.Networking](API/BeerMP/Networking.md)*

### Description

this is the BeerMP Packet class, it's used to send data to other clients with NetEvents.

### Public Functions

| Name                         | Description                        | Returns                          |
| ---------------------------- | ---------------------------------- | -------------------------------- |
| <method m="Write"/>          | write something to your Packet     | <value v="void"/>                |
| <method m="ReadBool"/>       | read a boolean from your Packet    | <value v="bool"/>                |
| <method m="ReadByte"/>       | read a byte from your Packet       | <value v="byte"/>                |
| <method m="ReadBytes"/>      | read a byte array from your Packet | <value v="byte"/>[]              |
| <method m="ReadFloat"/>      | read a float from your Packet      | <value v="float"/>               |
| <method m="ReadInt"/>        | read an integer from your Packet   | <value v="float"/>               |
| <method m="ReadLong"/>       | read a long from your Packet       | <value v="long"/>                |
| <method m="ReadQuaternion"/> | read a Quaternion from your Packet | <class c="Quaternion"/>          |
| <method m="ReadShort"/>      | read a short from your Packet      | <value v="short"/>               |
| <method m="ReadString"/>     | read a string from your Packet     | <value v="string"/>              |
| <method m="ReadVector2"/>    | read a Vector2 from your Packet    | <class c="Vector2"/>             |
| <method m="ReadVector3"/>    | read a Vector3 from your Packet    | <class c="Vector3"/>             |
| <method m="ReadVector4"/>    | read a Vector4 from your Packet    | <class c="Vector4"/>             |

### Examples

writing a Packet
```csharp
using BeerMP.Networking;

int someInteger;
Vector3 someVector3;
Quaternion someQuaternion;

using var _p = new Packet()
// Packet id currently has 2 functions
// 0 = enable Logging
// 1 = disable Logging

_p.Write(someInteger); // write index behind the value to insert instead, keep in mind while reading though!
_p.Write(someVector3);
_p.Write(someQuaternion);

// packet is ready to be sent
```

reading a Packet

!> make sure to read Packets in the order they've been written in, only exception is if you insert values!

```csharp
using BeerMP.Networking;

int someInteger;
Vector3 someVector3;
Quaternion someQuaternion;

// imagine you just received a Packet in a NetEvent

// correct way to read the packet of above example
someInteger = _p.ReadInt(); // set _moveReadPos to false if you want to read it twice for some reason
someVector3 = _p.readVector3();
someQuaternion = _p.ReadQuaternion();

// do stuff with what you received

// incorrect way to read the packet of above example
someInteger = _p.ReadInt();
someQuaternion = _p.ReadQuaternion();
someVector3 = _p.readVector3();
```