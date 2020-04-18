(function() {
    var bodyElement = document.getElementsByTagName("BODY")[0].style;
    var swap = false;
    var color1 = '#80baf0';
    var color2 = '#fffdf0';

    setInterval(function() {
        if (swap){
            bodyElement.backgroundColor = color1;
            bodyElement.color = color1;
        } else {
            bodyElement.backgroundColor = color2;
            bodyElement.color = color2;
        }
        swap = !swap
    }, 1000);
})();
