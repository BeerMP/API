# NetVehicle

*Namespace: [BeerMP.Networking.Managers](API/BeerMP/Networking/Managers.md)*

### Description

this is the BeerMP NetVehicle class, it's the base class for syncing vehicles.

### Static Functions

| Name                               | Description                                          | Returns                |
| ---------------------------------- | ---------------------------------------------------- | ---------------------- |
| <method m="AddPassengerSeat"/>     | adds a passenger seat to a vehicle                   | <class c="Transform"/> |

### Public Variables

| Name            | Description                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| hash            | returns NetVehicle's hash as <value v=int>                                                                                 |
| rigidbody       | returns NetVehicle's <class c=Rigidbody>                                                                                   |
| transform       | returns NetVehicle's <class c=Transform>                                                                                   |
| acc             | returns NetVehicle's <class c=AxisCarController>                                                                           |
| drivetrain      | returns NetVehicle's <class c=Drivetrain>                                                                                  |
| owner           | returns NetVehicle's owner ID as <value v=ulong>                                                                           |
| driver          | returns NetVehicle's driver ID as <value v=ulong>                                                                          |
| driverSeatTaken | returns if NetVehicle's driver seat is taken as <value v=bool>                                                             |
| driverPivots    | NetVehicle's driver pivots as [<class c=NetVehicleDriverPivots>](API/BeerMP/Networking/Managers/NetVehicleDriverPivots.md) |

### Public Functions

| Name                               | Description                                            | Returns                |
| ---------------------------------- | ------------------------------------------------------ | ---------------------- |
| <method m="AddPassengerSeat"/>     | adds a passenger seat to the vehicle                   | <class c="Transform"/> |
| <method m="SendEnterDrivingMode"/> | tell other clients the player has entered driving mode | <value v="void"/>      |
| <method m="SendExitDrivingMode"/>  | tell other clients the player has exited driving mode  | <value v="void"/>      |

### Examples

creating a NetVehicle
```csharp
using BeerMP.Networking.Managers;

// register your drivable by creating a NetVehicle instance
var netVehicle = new NetVehicle(myAwesomeDrivable.transform);

// assign the IK pivots
// it is recommended to approximately position them in unity editor and then adjust it in game
// keep in mind to parent them correctly, so that the pivots move when e.g. the steering wheel rotates
netVehicle.driverPivots = new NetVehicleDriverPivots
{
    throttlePedal = awesomeThrottlePedal,
    brakePedal = awesomeBrakePedal,
    clutchPedal = awesomeClutchPedal,
    steeringWheel = awesomeSteeringWheel,
    driverParent = awesomeDriverParent,
    gearSticks = new[] { awesomeGearStick }
};

// finally add the passenger seats
netVehicle.AddPassengerSeat(new Vector3(1f, 0f, 1f), new Vector3(0f, 0.5f, 0f)); // triggerOffset, headPivotOffset
netVehicle.AddPassengerSeat(new Vector3(1f, 0f, -1f), new Vector3(0f, 0.5f, 0f));
netVehicle.AddPassengerSeat(new Vector3(-1f, 0f, -1f), new Vector3(0f, 0.5f, 0f));
```

sending Enter/ExitDrivingMode from your DriveTrigger
```csharp
// on enter driving mode
netVehicle.SendEnterDrivingMode();

// on exit driving mode
netVehicle.SendExitDrivingMode();
```