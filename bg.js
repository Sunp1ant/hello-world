(function() {
    var bodyElement = document.getElementsByTagName("BODY")[0];
    var swap = false;
    var color1 = '#80baf0';
    var color2 = '#fffdf0';

    setInterval(function() {
        if (swap){
            bodyElement.style.backgroundColor = color1;
            bodyElement.style.color = color1;
        } else {
            bodyElement.style.backgroundColor = color2;
            bodyElement.style.color = color2;
        }
        swap = !swap
    }, 1000);
})();
