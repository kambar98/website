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
    if (Uz <= Ud) {
        window.alert("Niepoprawne wartości napięcia")
    }
    else {
        let wynik = (Number(Uz) - Number(Ud)) / (Number(I) * 0.001);
        let zaokraglenie = Math.round(wynik);

        document.getElementById("resistor").value = zaokraglenie;
    }
}

    function getCookieVal(offset) {
            var endstr = document.cookie.indexOf(";", offset);
            if (endstr == -1)
                endstr = document.cookie.length;
            return unescape(document.cookie.substring(offset, endstr));
        }

        function GetCookie(name) {
            var arg = name + "=";
            var alen = arg.length;
            var clen = document.cookie.length;
            var i = 0;
            while (i < clen) {
                var j = i + alen;
                if (document.cookie.substring(i, j) == arg)
                    return getCookieVal(j);
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0)
                    break;
            }
            return null;
        }

        function SetCookie(name, value) {
            var argv = SetCookie.arguments;
            var argc = SetCookie.arguments.length;
            var expires = (argc > 2) ? argv[2] : null;
            var path = (argc > 3) ? argv[3] : null;
            var domain = (argc > 4) ? argv[4] : null;
            var secure = (argc > 5) ? argv[5] : false;
            document.cookie = name + "=" + escape(value) +
                ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
                ((path == null) ? "" : ("; path=" + path)) +
                ((domain == null) ? "" : ("; domain=" + domain)) +
                ((secure == true) ? "; secure" : "");
        }

        function DeleteCookie(name) {
            var exp = new Date();
            FixCookieDate(exp);
            exp.setTime(exp.getTime() - 1);
            var cval = GetCookie(name);
            if (cval != null)
                document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
        }

        var expdate = new Date();
        var num_visits;
        expdate.setTime(expdate.getTime() + (5 * 24 * 60 * 60 * 1000));
        if (!(num_visits = GetCookie("num_visits")))
            num_visits = 0;
        num_visits++;
        SetCookie("num_visits", num_visits, expdate);

function promocja(oldp, nazwa, newp) {
    this.oldp = oldp;
    this.nazwa = nazwa;
    this.newp = newp;
}
var Tabela = new Array();
Tabela[0] = new promocja('<b>Standardowa cena:<b>', '<b>Nazwa:<b>', '<b>Promocyjna cena:<b>');
Tabela[1] = new promocja('35zł/szt', 'PK-1P-12V', '30zl/szt');
Tabela[2] = new promocja('68zł/szt', 'BIS-412 230V', '60zł/szt');
Tabela[3] = new promocja('1,00zł/szt', 'MPSA29 100V/0,8A', '0,90zł/szt');
Tabela[4] = new promocja('0,50zł/szt', 'LM339-SMD', '0,40zl/szt');
Tabela[5] = new promocja('2,50zł/szt', 'Zestaw diod LED', '2,00zł/szt');
function GenerujTabele(Tabela) {
    var txt = '';
    for (var x = 0; x < Tabela.length; x++) {
        txt += '<tr>';
        txt += '<td>' + Tabela[x].nazwa + '</td>';
        txt += '<td>' + Tabela[x].oldp + '</td>';
        txt += '<td>' + Tabela[x].newp + '</td>';
        txt += '</tr>';
    }
    var zawartosctabeli = document.getElementById("Kolejnerekordy");
    zawartosctabeli.innerHTML = txt;
}

