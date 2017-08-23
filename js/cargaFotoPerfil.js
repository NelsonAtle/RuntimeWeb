var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
}

function iniciar() {
    getGET();
    cargarFoto();
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

function cargarFoto() {
    if (localStorage.getItem("usuarios")) {
        var registros = JSON.parse(localStorage.getItem("usuarios"));
        get = getGET();
        for (i = 0; i < registros.length; i++) {

            if (get.var2 == registros[i].correo) {
                img = document.getElementById("foto");
                img.src = registros[i].foto;
                nombre = document.getElementById("nombre");
                nombre.innerHTML = registros[i].nombre + " " + registros[i].apellido;
                img = document.getElementById("busefovi");
                if (img) {
                    img.src = registros[i].foto;
                }
                img = document.getElementById("perfilUsuario");
                if (img) {
                    for (j = 0; j < registros.length; j++) {
                        if (registros[j].correo==getGET().var3) {
                            img.src = registros[j].foto;
                            var nombre = document.getElementById("nombreUsuario");
                            nombre.innerHTML=registros[j].nombre+" "+registros[j].apellido;
                        }
                    }

                }


                break;

            }
        }
    }
}



window.addEventListener("load", iniciar, false);
