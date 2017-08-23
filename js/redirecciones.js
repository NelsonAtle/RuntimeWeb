var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
}

function iniciar() {
    getGET();

    btnPublicaciones = document.getElementById("divMuro");
    if (btnPublicaciones) {
        btnPublicaciones.addEventListener("click", publicaciones, false);
    }

    logo = document.getElementById("logo");
    if (logo) {
        logo.addEventListener("click", principal, false);
    }

    btnBuscar = document.getElementById("divGrupos");
    if (btnBuscar) {
        btnBuscar.addEventListener("click", buscar, false);
    }

    btSeguidores = document.getElementById("seguidores");
    if (btSeguidores) {
        btSeguidores.addEventListener("click", seguidores, false);
    }


    btnNo1 = document.getElementById("noDisponibles1");
    if (btnNo1) {
        btnNo1.addEventListener("click", ganados, false);
    }

    btnNo2 = document.getElementById("noDisponibles2");
    if (btnNo2) {
        btnNo2.addEventListener("click", ganados, false);
    }

    btnNo3 = document.getElementById("noDisponibles3");
    if (btnNo3) {
        btnNo3.addEventListener("click", ganados, false);
    }

    btnNo4 = document.getElementById("noDisponibles4");
    if (btnNo4) {
        btnNo4.addEventListener("click", ganados, false);
    }

    btnNo5 = document.getElementById("noDisponibles5");
    if (btnNo5) {
        btnNo5.addEventListener("click", ganados, false);
    }

    video = document.getElementById("videosHtml");
    if (video) {
        video.addEventListener("click", videos, false);
    }
    foto = document.getElementById("fotosHtml");
    if (foto) {
        foto.addEventListener("click", fotos, false);
    }
    configuracion = document.getElementById("videosHtml");
    if (configuracion) {
        configuracion.addEventListener("click", configuraciones, false);
    }
    registroTimes = document.getElementById("divRegistro");
    if (registroTimes) {
        registroTimes.addEventListener("click", ganados, false);
    }
    
    btnNo6 = document.getElementById("noDisponibles6");
    if (btnNo6) {
        btnNo6.addEventListener("click", ganados, false);
    }
    seguir = document.getElementById("siguiendo");
    if (seguir) {
        seguir.addEventListener("click", siguiendo, false);
    }

    volver = document.getElementById("publicar");
    if (volver) {
        volver.addEventListener("click", publicaciones, false);
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

function publicaciones() {
    get = getGET();

    location.href = "publicaciones.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}

function principal() {
    get = getGET();
    location.href = "principal.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}

function buscar() {
    get = getGET();
    location.href = "buscar.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}

function seguidores() {
    get = getGET();
    location.href = "seguidores.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}



function videos() {
    get = getGET();
    location.href = "videos.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}

function fotos() {
    get = getGET();
    location.href = "fotos.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}

function configuraciones() {
    get = getGET();
    // location.href = "siguiendo.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}

function ganados() {
    alert("Opción no Disponible");
}


window.addEventListener("load", iniciar, false);
