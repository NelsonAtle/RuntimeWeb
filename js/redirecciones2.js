var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
}

function iniciar() {
    getGET();


    btnNo6 = document.getElementById("noDisponibles6");
    if (btnNo6) {
        btnNo6.addEventListener("click", ganados, false);
    }
    seguir = document.getElementById("siguiendo");
    if (seguir) {
        seguir.addEventListener("click", siguiendo, false);
    }

}

function siguiendo() {
    get = getGET();
    location.href = "seguidos.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}

function ganados() {
    alert("Opción no Disponible");
}

function getGET() {
    var loc = document.location.href;
    var getString = loc.split('?')[1];
    var GET = getString.split('&');
    var get = {};

    for (var i = 0, l = GET.length; i < l; i++) {
        var tmp = GET[i].split('=');
        get[tmp[0]] = unescape(decodeURI(tmp[1]));
    }
    return get;
}
window.addEventListener("load", iniciar, false);