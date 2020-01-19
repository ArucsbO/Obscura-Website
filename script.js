var i = 0;

if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
            if (width >= 100) {
                document.querySelector('.splash').style.display = 'none';
                document.querySelector('.main-1').style.display = 'block';
                document.body.className == 'body2'
            }
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}