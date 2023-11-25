// DOM
// 25/11/2023 11:40AM PH Time
// Last edit 25/11/2023 9:41 PM PH Time
const map1 = document.getElementById("map");
const addPlayerBtn = document.getElementById("add-player");
// the tilemap that renders
let map = [
    ['0 ', "0 ", "0 ", "0 ", "0 ", "0 ", "0 ", "0 ", "0 "],
    ["0 ", "0 ", "0 ", "0 ", "0 ", "0 ", "0 ", "0 ", "0 "],
    ['0 ', "0 ", '0 ', '0 ', '0 ', "0 ", "0 ", "0 ", "0 "],
    ['0 ', '0 ', '0 ', '0 ', '0 ', "0 ", "0 ", "0 ", "0 "],
    ['0 ', '0 ', '0 ', '0 ', '0 ', "0 ", "0 ", "0 ", "0 "],
    ['0 ', '0 ', '0 ', '0 ', '0 ', "0 ", "0 ", "0 ", "0 "],
    ['0 ', '0 ', '0 ', '0 ', '0 ', "0 ", "0 ", "0 ", "0 "],
    ['0 ', '0 ', '0 ', '0 ', '0 ', "0 ", "0 ", "0 ", "0 "],
    ['0 ', '0 ', '0 ', '0 ', '0 ', "0 ", "0 ", "0 ", "0 "]
    
];

// cloned array prevents original from changing
// idk if this is necessary 
let newMap = [...map];

// dimensions of the array
let lenRow = map.length;
let lenCol = map[0].length;
console.log(`# of Rows:${lenRow} # of Columns:${lenCol}`);

let tilemap = "";
function draw() {
    removeAllChildren();
    for (let row = 0; row < lenRow; row++) {
        for (let col = 0; col < lenCol; col++) {
            let tile = document.createElement("div");
            // checks if the value on current indexes is "1 " which signifies a player element
            if (!(newMap[row][col] === "1 ")) {
                // creates a checkered pattern (of course it gonna look good)
                if (row%2 == 0) {
                    if (!(col%2 == 0)) {
                        tile.classList.add("dark-tile");
                    } else {
                        tile.classList.add("light-tile");
                    }
                } else {
                    if (col%2 == 0) {
                        tile.classList.add("dark-tile");
                    } else {
                        tile.classList.add("light-tile");
                    }
                }
                map1.appendChild(tile);
            } else {
                // If it ever does find the player it will create a player and append
                let playerElem = document.createElement("div");
                playerElem.classList.add("player");
                map1.appendChild(playerElem);
            }
            
        }
    }
}
// console.logs the array (basically for debugging purposes only)
function render() {console.log(newMap);}

// removes all child elements 
function removeAllChildren() {
    while(map1.firstChild) {
        map1.removeChild(map1.firstChild);
    }
}
// stores player position on the map
let playerPos = {
    "x": null,
    "y": null
}
// adds the player at a specified point 
let player = false;
function addPlayer(y, x) {
    newMap[y][x] = "1 ";
    playerPos.x = x;
    playerPos.y = y;
    draw();
    render();
    player = true;
}
// determines the direction of the 
function movePlayer(direction) {
    // changes previous postion to "0 " or an occupied space
    if (player) {
       newMap[playerPos.y][playerPos.x] = "0 "
        switch(direction) {
            case "up":
                // the if statement is for checking if the "player" will go off the array
                // in this world, its flat
                if (!(playerPos.y == 0)) {
                    playerPos.y -= 1;
                } else {console.log("nope");}
                break;
            case "right":
                if (!(playerPos.x == lenCol-1)) {
                    playerPos.x += 1;
                } else {console.log("nope");}
                break;
            case "down":
                if (!(playerPos.y == lenRow-1)) {
                    playerPos.y += 1;
                } else {console.log("nope");}
                break;
            case "left":
                if (!(playerPos.x == 0)) {
                    playerPos.x -= 1;
                } else {console.log("nope");}
                break;
            default:
                alert(
                `And there he goes! Look a giant turtle! 
                (iT bROKE AGAIn!)
                
                yayyy
                `
                );
        }
        // to place the player in the new position
        newMap[playerPos.y][playerPos.x] = "1 "
        draw();
        //render(); 
    } else {
        console.log("not working aren't we");
    }
}

// render to dom

addPlayerBtn.addEventListener('click', () => {
    addPlayer(1, 2);
});

// handles key presses
document.addEventListener('keypress', function(e){
    if (e.key == "w") {
        movePlayer("up");
    } else if (e.key == "d") {
        movePlayer("right");
    } else if (e.key == "s") {
        movePlayer("down");
    } else if (e.key == "a") {
        movePlayer("left");
    } else {
        console.log("yes");
    }
});
draw();
// you have reached the end!