var theme;

(function() { //self executing function on load of the html
    var num = 0;
    var mode;//false represent decrement, true represents increment
    
    theme = 1;
   
    
    setInterval(function() {
    	
    	if (theme == 1) {
        	document.body.style.backgroundColor = getColor(num);
        } else {
        	document.body.style.backgroundColor = getColor2(num);
        }
        
        
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

function getColor2(num){
    var colors = [
      "#fe7f9c",
      "#ff69b4",
      "#df5286",
      "#fdab9f",
      "#f987c5"
    ];
    
    return colors[num];
}


function setTheme(){
	if (theme == 1) {
		theme = 2;
	}else {
		theme = 1;
	}
}
