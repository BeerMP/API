# BeerMPGlobals

*Namespace: [BeerMP.Networking](API/BeerMP/Networking.md)*

### Description

these are the BeerMP Globals.

### Static Variables

| Name          | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| IsHost        | returns if the client is host or not as <value v=bool>                      |
| HostID        | returns HostID as <value v=ulong>                                           |
| UserID        | returns UserID as <value v=ulong>                                           |
| OnMemberJoin  | ActionContainer, is invoked once a client joins the game, returns client ID |
| OnMemberReady | ActionContainer, is invoked once a client is ready, returns client ID       |
| OnMemberExit  | ActionContainer, is invoked once a client exits the game, returns client ID |

### Examples

```csharp
using BeerMP.Networking;

if (BeerMPGlobals.IsHost)
{
    // code only host should execute
}

// executed once client joined
BeerMPGlobals.OnMemberJoin += (user) => {
    // prepare something for the joined client
    // or do whatever you want here
};

// executed after clients game is done loading
BeerMPGlobals.OnMemberReady += (user) => {
    // create Packet for initial sync and send it to client that is ready now
    // or do whatever you want here
};

// executed once client exits game
BeerMPGlobals.OnMemberExit += (user) => {
    // delete objects of exiting client
    // or do whatever you want here
};
```