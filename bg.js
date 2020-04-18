(function() {
    var swap = false;
    var color1 = '#80baf0';
    var color2 = '#fffdf0';

    setInterval(function() {
        if (swap){
            document.body.style.backgroundColor = color1;
        } else {
            document.body.style.backgroundColor = color2;
        }
        swap = !swap
    }, 1000);
})();
