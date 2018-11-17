var rows = 6;
var columns = 7;

var playGroundWidth = 700;
var playGroundHeight = 300;
var menuBtnHeight = 30;
var divBtnHeight = playGroundHeight / rows;
var btnWidth = playGroundWidth / columns;

var player1 = "orange";
var player2 = "red";
var currentPlayer = player1;

createZone();
createTopBtns();
createMatrix();

function createZone() {
    var btns = document.createElement("div");
    btns.setAttribute("id", "btns");
    var playGround = document.createElement("div");
    playGround.setAttribute("id", "playGround");

    var zone = document.getElementById("zone");
    zone.appendChild(btns);
    zone.appendChild(playGround);
}

function createTopBtns() {
    var btns = document.getElementById("btns");
    for (var i = 0; i < columns; i++) {
        var newBtn = document.createElement("button");
        newBtn.setAttribute("style", "width:" + btnWidth + "px; height:" + menuBtnHeight + "px;");
        newBtn.setAttribute("id", i);
        newBtn.setAttribute("class", "upperMenuBtn");
        newBtn.onclick = function () {
            var theId;
            var theDiv;
            var theStyle;
            var theColor;

            //find the right row
            for (var i = rows-1; i >= 0; i--) {
                theId = i + "," + this.id;
                theDiv = document.getElementById(theId);
                theColor = theDiv.divColor;
                if (theColor === "lightGray")
                    break;
            }

            if (theColor !== "lightGray")
                return;

            theDiv.divColor = currentPlayer;
            changePlayer();
            theDiv.setAttribute("style", theDiv.divStyle + "background-color: " + theDiv.divColor + ";");
            
        };
        btns.appendChild(newBtn);
    }
}

function changePlayer() {
    if (currentPlayer === player1)
        currentPlayer = player2;
    else
        currentPlayer = player1;

}

function createMatrix() {

    var playGround = document.getElementById("playGround");

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var newBtnPlay = document.createElement("button");
            newBtnPlay.divStyle = "width: " + btnWidth + "px; height:" + divBtnHeight + "px; margin: 2px;";
            newBtnPlay.divColor = "lightGray";
            newBtnPlay.setAttribute("style", newBtnPlay.divStyle + "background-color: " + newBtnPlay.divColor + ";");
            newBtnPlay.setAttribute("id", i + "," + j);
            newBtnPlay.setAttribute("disabled", true);
            playGround.appendChild(newBtnPlay);
        }
        var newLine = document.createElement("br");
        playGround.appendChild(newLine);
    }

}


