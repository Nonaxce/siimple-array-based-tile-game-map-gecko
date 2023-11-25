// DOM
// 25/11/2023 11:40AM PH Time
const gameMap = document.getElementById("game-map");

// this is will be array version of the code map
let map2d = [
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], 
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], 
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], 
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"], 
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"],
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"],
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"],
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"],
    ["* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "* ", "/"]
];

console.log(`length/Rows: ${map2d[0].length-1}`);
console.log(`height/Columns: ${map2d.length}`);
let output = ``;
let newLine = "\n";

/*
function drawMap(){
    for(let row = 0; row < map2d.length; row++) {
        //output = ``;
        for(let col = 0; col < map2d[row].length; col++) {
            if ((col + 1) == map2d[row].length) {
                output += newLine;
            } else {
                output += map2d[row][col];
            }
        }
    }
    console.log(output);
}
*/

drawMap();
function drawMap(){
    for(let row = 0; row < map2d.length; row++) {
        for(let col = 0; col < map2d[row].length; col++) {
            if ((col + 1) == map2d[row].length) {
                output += newLine;
                let BR = document.createElement("br")
                gameMap.appendChild(BR);
            } else {
                output += map2d[row][col];

                let square = document.createElement("div")
                square.classList.add("square");

                if ((col + 1)%2 == 0) {
                    square.classList.add("evenSquare");
                } else {
                    square.classList.add("oddSquare");
                }

                gameMap.appendChild(square);
            }
        }
    }
    console.log(output);
}

