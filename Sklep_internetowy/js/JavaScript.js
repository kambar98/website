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
    var Uzas = $("#voltagea1").val();
    var Udiody 

    alert(Uzas);
        

    }
}