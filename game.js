// Project
// 25/11/2023 11:40AM PH Time
// Last edit 25/11/2023 9:41 PM PH Time
const map1 = document.getElementById("map");
const addPlayerBtn = document.getElementById("add-player");
const addBombBtn = document.getElementById("add-explosive");
// the tilemap that renders
// "0"s represent empty areas that an object or entity is not being occupied by
// any value that isn't a 0 will be classified as occupied
let map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    // resets child
    if (map1.firstChild) removeAllChildren();
    for (let row = 0; row < lenRow; row++) {
        for (let col = 0; col < lenCol; col++) {
            let tile = document.createElement("div");
            // checks if the value on current indexes is "1 " which signifies a player element
            if (newMap[row][col] === 1) {
                // If it ever does find the player it will create a player and append
                let playerElem = document.createElement("div");
                playerElem.classList.add("player");
                playerElem.setAttribute('title', 'player');
                map1.appendChild(playerElem);
            } else if (newMap[row][col] === 2) {
                // creates a bomb
                let bombElem = document.createElement("div");
                bombElem.classList.add("bomb");
                bombElem.setAttribute('title', 'me bomb');
                map1.appendChild(bombElem);
            } else if (newMap[row][col] === 3) {
                // creates a wall
                let wallElem = document.createElement("div");
                wallElem.classList.add("wall");
                wallElem.setAttribute('title', 'inanimate object');
                map1.appendChild(wallElem);
            } else if (newMap[row][col] === 4) {
                // creates a wall
                let voidElem = document.createElement("div");
                voidElem.classList.add("void");
                voidElem.setAttribute('title', 'X6$t(jhsQ2&8*)9</`=SyvX@-');
                map1.appendChild(voidElem);
            } else {
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
                map1.setAttribute('title', 'yummy grass');
                map1.appendChild(tile);
                
            }
            
        }
    }
}
// console.logs the array (basically for debugging purposes only)
function render() {console.log(newMap);}

// removes all child elements (!IMPORTANT)
function removeAllChildren() {
    while(map1.firstChild) {
        // deletes all references to child element to optimize memory
        map1.lastChild = null;
        map1.removeChild(map1.lastChild);
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
    if (!player) {
        newMap[y][x] = 1;
        playerPos.x = x;
        playerPos.y = y;
        draw();
        player = true;
    }
}
function removePlayer() {
    newMap[playerPos.y][playerPos.x] = 0;
    player = false;
}
// determines the direction of the 
function movePlayer(direction) {
    // changes previous postion to "0 " or an unoccupied space
    if (player) {
       newMap[playerPos.y][playerPos.x] = 0;
        switch(direction) {
            case "up":
                // the if statement is for checking if the "player" will go off the array
                // in this world, its flat
                if (!(playerPos.y == 0) && !(newMap[playerPos.y-1][playerPos.x] === 3)) {
                    playerPos.y -= 1;
                }
                break;
            case "right":
                if (!(playerPos.x == lenCol-1) && !(newMap[playerPos.y][playerPos.x+1] === 3)) {
                    playerPos.x += 1;
                }
                break;
            case "down":
                if (!(playerPos.y == lenRow-1) && !(newMap[playerPos.y+1][playerPos.x] === 3)) {
                    playerPos.y += 1;
                } 
                break;
            case "left":
                if (!(playerPos.x == 0) && !(newMap[playerPos.y][playerPos.x-1] === 3)) {
                    playerPos.x -= 1;
                }
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
        newMap[playerPos.y][playerPos.x] = 1;
        draw();
        //render(); 
    } else {
        console.log("not working aren't we");
    }
}

function addBombs() {
    //newMap[0][Math.random(12)]
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    newMap[0][getRandomInt(0, lenCol)] = 2;
    console.log("Bomb dropped");
}

// render to dom

addPlayerBtn.addEventListener('click', () => {
    addPlayer(1, 2);
    
});

addBombBtn.addEventListener('click', () => {
    addBombs();
    draw();
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
    } else if (e.key == "w" && e.key == "a") {
        movePlayer("upper-left");
        console.log("yes11");
    } else {
        console.log("yes");
    }
});
draw();
// you have reached the end!