function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var clock = document.getElementById("clock");
    clock.innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function date() {
    n = new Date();
    year = n.getFullYear();
    month = n.getMonth();
    day = n.getDate();
    var montharray = new Array("Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec")
    document.getElementById("date").innerHTML = day + "-" + montharray[month] + "-" + year;
}

function calculator() {
    let Uz = document.getElementById("volt1").value;
    let Ud = document.getElementById("volt2").value;
    let I = document.getElementById("cur3").value;
    if (Uz < Ud) {
        window.alert("Niepoprawne wartości zasilania")
    }
    else {
        let wynik = (Number(Uz) - Number(Ud)) / (Number(I) * 0.001);
        document.getElementById("resistor").value = wynik;
    }
}