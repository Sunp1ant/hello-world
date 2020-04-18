(function() { //self executing function on load of the html
    var num = 0;
    var mode;//false represent decrement, true represents increment
    
    setInterval(function() {
        document.body.style.backgroundColor = getColor(num);
        if (num == 4){
            mode = false;
        }
        if (num == 0){
            mode = true;
        }
        
        if (mode){
            num++;
        } else {
            num--;
        }
        
    }, 500);
})();

function getColor(num){
    var colors = [
      "#bceae2",
      "#a2d1d2",
      "#8fc4cc",
      "#69929a",
      "#667e7e"
    ];
    
    return colors[num];
}
