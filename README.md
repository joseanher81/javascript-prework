# Mars Rover Kata

Javascript challenge for Ironhack prework.

## Getting Started

To watch log data open console in web browser.

You can add as many rovers as you wish and change their default properties values.

```
var roverAlpha = {
  id: "1",
  direction: "N",
  x: 0,
  y: 0,
  currentComNumber: 0,
  commands: "lflfflfzrflfbrflflfbbrffrffff",
  travelLog: []
}
```

The main method is **start(rover[])** 
It receives an array of rover objects.

```
start([roverAlpha, roverBeta, roverGamma]);
```