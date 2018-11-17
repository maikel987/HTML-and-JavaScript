function loadGame(fileName) {
    setJs(fileName);
    setTheme(fileName);
}

function setJs(fileName) {
    var theScript = document.createElement('script');
    theScript.setAttribute("type", "text/javascript");
    theScript.setAttribute("src", fileName + ".js");
    document.getElementsByTagName("head")[0].appendChild(theScript);
}
function setTheme(fileName) {
    var theLink = document.createElement("link");
    theLink.setAttribute("rel", "stylesheet");
    theLink.setAttribute("type", "text/css");
    theLink.setAttribute("href", fileName + ".css");
    document.getElementsByTagName("head")[0].appendChild(theLink);
}

