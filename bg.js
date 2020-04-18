(function() {
    var s = document.getElementById('titleTable').style,
        f = false,
        c1 = '#000000',
        c2 = '#ffffff';

    setInterval(function() {
        s.backgroundColor = f ? c1 : c2;
        s.color = f ? c2 : c1;
        f = !f;
    }, 500);
})();
