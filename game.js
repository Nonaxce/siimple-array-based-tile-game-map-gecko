// DOM
// 25/11/2023 11:40AM PH Time
const gameMap = document.getElementById("game-map");
let player = {
    "xPos": 4,
    "yPos": 4
};
// this is will be array version of the code map
const map2d = [
//   0      1     2     3     4     5     6     7    8   
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], // 0
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], // 1
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], // 2
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], // 3
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], // 4
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], // 5
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], // 6
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], // 7
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"]  // 8
];
// CONSOLE BASED GAME**
console.log(`length/Rows: ${map2d[0].length-1}`);
console.log(`height/Columns: ${map2d.length}`);
let output = ``;
let newLine = "\n";

/*
function drawMapConsole(){
    for(let row = 0; row < map2d.length; row++) {
        //output = ``;
        for(let col = 0; col < map2d[row].length; col++) {
            if ((col + 1) == map2d[row].length) {
                output += newLine;
            } else {
                output += map2d[row][col];
                map2d[4][4] = "X ";
            }
        }
    }
}
*/

// Draws the main map of the game
// Also contains the player
// NOTE TO SELF: figure out a way to seperate the player and map (probably create another tilemap above)
function drawMap(){
    // reset
    output = "";
    removeAllSquares();
    for(let row = 0; row < map2d.length; row++) {
        for(let col = 0; col < map2d[row].length; col++) {
            if ((col + 1) == map2d[row].length) {
                output += newLine;
                let BR = document.createElement("br")
                gameMap.appendChild(BR);
            } else {
                let square = document.createElement("div")
                square.classList.add("square");
                // changes the squares colo(u)rs to make it look checkered
                if ((col + 1)%2 == 0) {
                    square.classList.add("evenSquare");
                } else {
                    square.classList.add("oddSquare");
                }
                // places the player at a specified area
                // if (col == player.xPos && row == player.yPos) {
                //     drawPlayer(player.xPos, player.yPos);
                //     output += map2d[row][col];
                
                output += map2d[row][col];
                gameMap.appendChild(square);
                
            }
        }
    }
    console.log(output);
    console.log("===============")
    //drawMapConsole();
}


// Removes all the squares of the gameMap
function removeAllSquares() {
    while (gameMap.firstChild) {
        gameMap.removeChild(gameMap.firstChild);
    }
}

// Draws the player on the document
function drawPlayer(y, x) {
    map2d[y][x] = "X ";
    let playerElem = document.createElement("div");
    playerElem.classList.add("playerSquare");
    gameMap.appendChild(playerElem);
}

function moveUp() {
    player.yPos = player.yPos - 1;
}
function moveLeft() {
    player.xPos = player.xPos - 1;
}

document.addEventListener('keypress', function(event){
    if (event.key === "W") {
        drawPlayer(player.yPos, player.xPos);
        drawMap();
        console.log("hi")
    }
});

// THE SOURCE OF ALL THINGS THAT WORK AND MAY WORK AND DO NOT WORK SO DON'T TOUCH OR THIS WON'T WORK ~turtle
drawMap();
drawPlayer(player.yPos, player.xPos);
moveLeft();
moveUp();
drawMap()








