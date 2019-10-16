// This object is our Rover Alpha
var roverAlpha = {
  id: "1",
  direction: "N",
  x: 0,
  y: 0,
  currentComNumber: 0,
  commands: "lflfflfzrflfbrflflfbbrffrffff",
  travelLog: []
}

// This object is our Rover Beta
var roverBeta = {
  id: "2",
  direction: "S",
  x: 5,
  y: 5,
  currentComNumber: 0,
  commands: "lflfflfrflfbrflflfbbrffrffff",
  travelLog: []
}

// This object is our Rover Gamma
var roverGamma = {
  id: "3",
  direction: "S",
  x: 0,
  y: 7,
  currentComNumber: 0,
  commands: "lfrbfflfrflfbrflflffbrflfrfff",
  travelLog: []
}

// This 10x10 matrix represents the map, the O's are obstacles
var map = [
  ['.','.','.','.','.','.','.','.','O','.'],
  ['.','.','.','O','.','.','.','.','.','.'],
  ['O','.','O','.','.','.','O','O','.','.'],
  ['.','.','.','.','.','.','.','.','.','.'],
  ['.','.','.','.','O','.','.','.','.','.'],
  ['.','.','O','.','O','.','.','O','.','.'],
  ['O','.','O','.','.','.','.','.','.','.'],
  ['.','.','.','.','.','O','.','.','.','.'],
  ['.','.','O','O','.','.','.','.','O','.'],
  ['.','O','.','.','.','.','.','O','O','.']
]

/**
 * Turns the rover left
 */
function turnLeft(rover){
  var currentDir = rover.direction;
  
  switch(currentDir) {
    case "N":
        rover.direction = "W";
       break;
    case "W":
        rover.direction = "S";
        break;
    case "S":
        rover.direction = "E";
        break;
    case "E":
        rover.direction = "N";      
  }
  console.log(`Rover ${rover.id} direction was ${currentDir} and it has just turned left to ${rover.direction}`);
}

/**
 * Turns the rover right
 */
function turnRight(rover){
  var currentDir = rover.direction;
  
  switch(currentDir) {
    case "N":
        rover.direction = "E";
       break;
    case "E":
        rover.direction = "S";
        break;
    case "S":
        rover.direction = "W";
        break;
    case "W":
        rover.direction = "N";      
  }
  console.log(`Rover ${rover.id} direction was ${currentDir} and it has just turned right to ${rover.direction}`);
}

/**
 * Moves the rover foward
 */
function moveForward(rover){
  var currentDir = rover.direction;
  var originalPos = `x: ${rover.x}, y: ${rover.y}`;
  var finalPos;
  var hasMoved = false;
  
  switch(currentDir) {
    case "N":
        if(isValidMovement(rover.y - 1, rover.x) && !isCollision(rover.y - 1, rover.x, rover.id)){
          map[rover.y][rover.x] = "."; // Deleting old Rover position from map
          rover.y--; // Moving Rover
          map[rover.y][rover.x] = rover.id; // Adding new Rover position to map
          hasMoved = true;
        }    
       break;
    case "E":
       if(isValidMovement(rover.y, rover.x + 1) && !isCollision(rover.y, rover.x + 1, rover.id)){
          map[rover.y][rover.x] = "."; // Deleting old Rover position from map 
          rover.x++; // Moving Rover
          map[rover.y][rover.x] = rover.id; // Adding new Rover position to map
          hasMoved = true;
       }
       break;
    case "S":
        if(isValidMovement(rover.y + 1, rover.x) && !isCollision(rover.y + 1, rover.x, rover.id)){
          map[rover.y][rover.x] = "."; // Deleting old Rover position from map
          rover.y++; // Moving Rover
          map[rover.y][rover.x] = rover.id; // Adding new Rover position to map
          hasMoved = true;
        }
        break;
    case "W":
        if(isValidMovement(rover.y, rover.x - 1) && !isCollision(rover.y, rover.x - 1, rover.id)){
          map[rover.y][rover.x] = "."; // Deleting old Rover position from map
          rover.x--; // Moving Rover
          map[rover.y][rover.x] = rover.id; // Adding new Rover position to map
          hasMoved = true;
        }    
  }
  if(hasMoved){
    finalPos = `x: ${rover.x}, y: ${rover.y}`;
    rover.travelLog.push(finalPos); // Adding rover position to log
    console.log(`Rover ${rover.id} has moved foward from ${originalPos} to ${finalPos}`);
  } else {   
    console.log(`Movement forbidden for Rover ${rover.id}`);
  }
  
}

/**
 * Moves the rover backwards
 */
function moveBackward(rover){
  var currentDir = rover.direction;
  var originalPos = `x: ${rover.x}, y: ${rover.y}`;
  var finalPos = null;
  var hasMoved = false;
  
  switch(currentDir) {
    case "N":
        if(isValidMovement(rover.y + 1, rover.x) && !isCollision(rover.y + 1, rover.x, rover.id)){
          map[rover.y][rover.x] = "."; // Deleting old Rover position from map
          rover.y++; // Moving Rover
          map[rover.y][rover.x] = rover.id; // Adding new Rover position to map
          hasMoved = true;
        }    
       break;
    case "E":
       if(isValidMovement(rover.y, rover.x - 1) && !isCollision(rover.y, rover.x - 1, rover.id)){
          map[rover.y][rover.x] = "."; // Deleting old Rover position from map
          rover.x--; // Moving Rover
          map[rover.y][rover.x] = rover.id; // Adding new Rover position to map
          hasMoved = true;
       }
       break;
    case "S":
        if(isValidMovement(rover.y - 1, rover.x) && !isCollision(rover.y - 1, rover.x, rover.id)){
          map[rover.y][rover.x] = "."; // Deleting old Rover position from map
          rover.y--; // Moving Rover
          map[rover.y][rover.x] = rover.id; // Adding new Rover position to map
          hasMoved = true;
        }
        break;
    case "W":
        if(isValidMovement(rover.y, rover.x + 1) && !isCollision(rover.y, rover.x+1, rover.id)){
          map[rover.y][rover.x] = "."; // Deleting old Rover position from map
          rover.x++; // Moving Rover
          map[rover.y][rover.x] = rover.id; // Adding new Rover position to map
          hasMoved = true;
        }    
  }
  
  if(hasMoved){
    finalPos = `x: ${rover.x}, y: ${rover.y}`;
    rover.travelLog.push(finalPos); // Adding rover position to log
    console.log(`Rover ${rover.id} has moved backard from ${originalPos} to ${finalPos}`);
  } else {   
    console.log(`Movement forbidden for Rover ${rover.id}`);
  }
  
}

/**
 * Checks whether the movement is out of bounds
 */
function isValidMovement(y, x){
  // Check movement for a rectangular grid/map
  if(y < 0 || y > map.length-1){
    return false;
  }
  if(x < 0 || x > map[0].length-1){
    return false;
  }
  return true;
}

/**
 * This method checks whether there is a collision
 * returns true when collision
 */
function isCollision(y, x){
  if(map[y][x] !== "."){
    console.log("Avoiding collision!!!");
    return true;
  } 
  return false;
}

/**
 * Command validation
 */
function validateCommand(com){
     if(com !== "f" && com !== "b" && com !== "r" && com !== "l"){
       return false;
     }  
   return true;
}

/**
 * Receives a command and a rover 
 * and proccess the movement
 */
function processCommand(rover){
  var command = rover.commands[rover.currentComNumber];
  rover.currentComNumber++;

  // Validate commandList
  if (validateCommand(command)) {
      console.log(`Processing the following movement command: ${command}`);

        // Check character value
        switch(command) {
          case "f":
            moveForward(rover);
            break;
          case "b":
            moveBackward(rover);
            break;
          case "r":
            turnRight(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
        }

  } else {
    console.log("WARNING! Invalid command/s on command list... Movement aborted");
  }

}

function isValidInitPosition(rovers) {
  for (var i = 0; i < rovers.length; i++) {
    if(map[rovers[i].y][rovers[i].x] !== ".") {  // There is a rover with invalid init position
      return false; 
    }   
    map[rovers[i].y][rovers[i].x] = rovers[i].id;  // Add rovers initial position to map
    rovers[i].travelLog.push(`x: ${rovers[i].x}, y: ${rovers[i].y}`); // Adding rover position to log
  }
  return true;
}

/**
 * Prints rover's log
 */
function printLog(rover){
  console.log('*********************************************');
  console.log(`The Rover ${rover.id} has travelled the following route`);
  console.log('*********************************************');    
  
  for(var i = 0; i < rover.travelLog.length; i++){
    console.log(`Pos. ${i+1} -> ${rover.travelLog[i]}`);
  }  
}

/**
 * Draws the map status
 */
function drawRoute(){
  console.log('*************************************');
  console.log("Drawing the final positions on map...")
  console.log('*************************************');
  for(var y = 0; y < 10; y++){
    var line = [];

    for(var x = 0; x < 10; x++){
      line.push(map[y][x]);
    }
    console.log(line);
  }
}

/**
 * Main method
 * The rovers take turns to move according to their commands
 */
function start(rovers) {

  if(isValidInitPosition(rovers)) { // Check initial positions of Rovers

    var areCommands = true;

    while (areCommands){  // Turns loop executes as long as there are commands
      areCommands = false;
      for(var i = 0; i < rovers.length; i++) {
        if(rovers[i].currentComNumber < rovers[i].commands.length) { // Rover still has commands
          processCommand(rovers[i]);
          areCommands = true;
        } 
      }
    }
     // Print logs and map final status
     for(var i = 0; i < rovers.length; i++) {
      printLog(rovers[i]);
     }
     drawRoute();

  } else {
    console.log("Wrong initial position for Rovers");
  }
}
  
/*
* This calls the main function
* pass an array of rovers as args
*/
start([roverAlpha, roverBeta, roverGamma]);


