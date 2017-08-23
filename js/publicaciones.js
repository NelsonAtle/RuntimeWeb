var publicaciones = JSON.parse(localStorage.getItem('publicaciones'));

if (!publicaciones) {
    publicaciones = [];
}

var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
}

function iniciar() {
    datoUsuario = getGET();
    titulo = document.getElementById("tituloPubli");
    archivo = document.getElementById("fotoVideo");
    foto = document.getElementById("preview");
    video = document.getElementById("video");
    descripcion = document.getElementById("descripcionPubli");
    publicar = document.getElementById("publicar");

    archivo.addEventListener("change", handleFiles, false);
    publicar.addEventListener("click", registrarPublicacion, false);
}

function getGET() {
    loc = document.location.href;
    var getString = loc.split('?')[1];
    var GET = getString.split('&');
    var get = {};

    for (var i = 0, l = GET.length; i < l; i++) {
        var tmp = GET[i].split('=');
        get[tmp[0]] = unescape(decodeURI(tmp[1]));
    }
    return get;
}

function handleFiles() {
    var extension = archivo.value;
    var file = archivo.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        array = extension.split(".")[1];

        if (array == "mp4") {
            video.controls = true;
            foto.src = "http://significadodeloscolores.info/wp-content/uploads/2014/08/color-negro.png";
            path = reader.result;
        }
        if (array == "jpg" || array == "gif" || array == "png" || array == "jpeg") {
            video.src = "";
            video.controls = false;
            foto.src = reader.result;
           
            path = reader.result;
        }

    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        video.controls = false;
        foto.src = "imagenes/view.jpg";
        video.src = "";

    }
}

function registrarPublicacion() {
    if (localStorage.getItem("usuarios")) {
        var registros = JSON.parse(localStorage.getItem("usuarios"));

        for (i = 0; i < registros.length; i++) {
            if (datoUsuario.var2 == registros[i].correo) {

                saveToLocalStorage(registros[i].nombre + " " + registros[i].apellido, datoUsuario.var2, titulo.value, descripcion.value, path);
                 
                break;
            }
        }

    }







}

function saveToLocalStorage(nombre, correo, titulo, descripcion, fotoVideo) {


    var i = 0;
    var tipo = "";
    if (array == "mp4") {
        tipo = "video";
    }
    if (array == "jpg" || array == "gif" || array == "png" || array == "jpeg") {
        tipo = "foto";
    }

    while (i <= publicaciones.length) {
        if (publicaciones.length == 0) {
            var publicacion = {
                nombre,
                correo,
                tipo,
                titulo,
                descripcion,
                fotoVideo
            };
            publicaciones.push(publicacion);
            localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
            location.href = "publicaciones.html?var1=" + datoUsuario.var1 + "&var2=" + datoUsuario.var2 + "&";
            alert("Publicado Correctamente");
            break;
        } else {
            var publicacion = {
                nombre,
                correo,
                tipo,
                titulo,
                descripcion,
                fotoVideo
            };
            publicaciones.push(publicacion);
            localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
            alert("Publicado Correctamente");
           location.href = "publicaciones.html?var1=" + datoUsuario.var1 + "&var2=" + datoUsuario.var2 + "&";
            break;
        }

        i++;
    }
}







window.addEventListener("load", iniciar, false);
