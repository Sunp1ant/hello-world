(function() {
    var bodyElement = document.getElementsByTagName("BODY")[0];
    var swap = false;
    var color1 = '#000000';
    var color2 = '#ffffff';

    setInterval(function() {
        if (swap){
            bodyElement.backgroundColor = c1;
            bodyElement.color = c1;
        } else {
            bodyElement.backgroundColor = c2;
            bodyElement.color = c2;
        }
        swap = !swap
    }, 500);
})();
