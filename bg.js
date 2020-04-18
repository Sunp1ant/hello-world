(function() {
    var num = 0;
    setInterval(function() {
        document.body.style.backgroundColor = getColor(num);
        if (num == 4) {
            num--;
        } else {
            num++;
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
