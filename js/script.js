
var b,
    r,
   g;

function mudarCor(){
    b = document.getElementById("blue").value;
    r = document.getElementById('red').value;
    g = document.getElementById("green").value;
    document.getElementById('cor').style.backgroundColor = rgb();
}

function rgb() {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
